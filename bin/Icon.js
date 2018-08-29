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
    if (size) {
      defaultStyle.width = size + "px";
      defaultStyle.height = size + "px";
    }
    if (color) {
      defaultStyle.color = color;
    }
    classPrefix = classPrefix ? " " + classPrefix : "";
    return (
      <span style={defaultStyle} className={`svgicon${classPrefix}`}>
        {this.props.children}
      </span>
    );
  }
}
