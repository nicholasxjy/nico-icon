const fsExtra = require("fs-extra");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const glob = require("glob");
const SVGO = require("svgo");
const svgoConfig = require("./svgoConfig");

const svgo = new SVGO({
  plugins: svgoConfig
});

function titleCase(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function copyFile(s, t) {
  return fsExtra.copyFile(s, t);
}

function checkOrCreateDestDir(dir) {
  return fsExtra.ensureDir(dir);
}

function clearDestDir(dir) {
  const filepath = path.join(dir, "*.js");
  return fsExtra.remove(filepath);
}

function getComponentName(filename) {
  let name = path.basename(filename).split(".")[0];
  return `Icon${titleCase(name)}`;
}

function readFileData(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, err => {
      if (err) reject(err);
      resolve();
    });
  });
}

// get svg viewbox
function getViewBox(svgoResult) {
  let viewBoxMatch = svgoResult.data.match(
    /viewBox="([-\d\.]+\s[-\d\.]+\s[-\d\.]+\s[-\d\.]+)"/
  );
  let viewBox = "0 0 200 200";

  if (viewBoxMatch && viewBoxMatch.length > 1) {
    viewBox = viewBoxMatch[1];
  } else if (svgoResult.info.height && svgoResult.info.width) {
    viewBox = `0 0 ${svgoResult.info.width} ${svgoResult.info.height}`;
  }

  return viewBox;
}
function compile(content, data) {
  return content.replace(/\${(\w+)}/gi, function(match, name) {
    return data[name] ? data[name] : "";
  });
}
// rename fill and stroke. (It can restroe in vue-svgicon)
function renameStyle(content) {
  let styleShaeReg = /<(path|rect|circle|polygon|line|polyline|g|ellipse).+>/gi;
  let styleReg = /fill=\"|stroke="/gi;
  content = content.replace(styleShaeReg, function(shape) {
    return shape.replace(styleReg, function(styleName) {
      return "_" + styleName;
    });
  });

  return content;
}
async function handleSvgFile(filename, destPath) {
  try {
    const fileData = await readFileData(filename);
    let result = await svgo.optimize(fileData);
    let data = result.data.replace(/<svg[^>]+>/gi, "").replace(/<\/svg>/gi, "");
    data = renameStyle(data);
    const viewBox = getViewBox(result);
    const name = getComponentName(filename);
    const tpl = await readFileData(path.join(__dirname, "./tpl.txt"));
    let content = compile(tpl, {
      name,
      width: parseFloat(result.info.width) || 16,
      height: parseFloat(result.info.height) || 16,
      viewBox,
      data
    });
    const destFileName = path.join(destPath, name + ".js");
    await writeFile(destFileName, content);
    console.log(chalk.yellow(`generated ${name}`));
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = async function(options) {
  try {
    const { source, dest } = options;
    if (!source || !dest) {
      throw new Error("no source or dest config");
    }
    console.log(`${chalk.blue(`source: ${source}`)}`);
    console.log(`${chalk.blue(`dest: ${dest}`)}`);
    // remove old icons first
    const destPath = path.join(process.cwd(), dest);
    console.log(`${chalk.blue(`clear old in ${destPath}`)}`);
    await checkOrCreateDestDir(destPath);
    await clearDestDir(destPath);

    glob(path.join(process.cwd(), source, "**/*.svg"), async (err, files) => {
      if (err) throw err;
      const allPros = files.map(f => {
        const filename = path.normalize(f);
        return handleSvgFile(filename, destPath);
      });
      await Promise.all(allPros);
      // copy icon to dest dir
      await copyFile(
        path.join(__dirname, "Icon.js"),
        path.join(destPath, "Icon.js")
      );
      console.log(chalk.green("All done!"));
    });
  } catch (err) {
    console.log(`${chalk.red(err.message)}`);
    console.log(`${chalk.cyan("use option --help, get some help")}`);
  }
};
