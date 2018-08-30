/* eslint-disable */

import React from "react";

const defaultStyle = {
  width: "16px",
  height: "16px",
  color: "#666666"
};

export default class Icon extends React.Component {
  render() {
    let { size, color, classPrefix } = this.props;
    let style = Object.assign({}, defaultStyle)
    if (size) {
      style.width = size + "px";
      style.height = size + "px";
    }
    if (color) {
      style.color = color;
    }
    classPrefix = classPrefix ? " " + classPrefix : "";
    return (
      <span style={style} className={`svgicon${classPrefix}`}>
        {this.props.children}
      </span>
    );
  }
}
