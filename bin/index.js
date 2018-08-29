#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");

program.version("1.0.0", "-v,--version").usage("<command> [options]");

program
  .description("turn svg files into react components")
  .option("-s, --source <source>", "source directory")
  .option("-o, --dest <dest>", "out directory")
  .action(async (args, cmd) => {
    await require("./build")(args);
  });

program.on("--help", () => {
  console.log();
  console.log(`  Run ${chalk.cyan(`rkicon --help`)} for detailed usage.`);
  console.log();
});

program.parse(process.argv);
