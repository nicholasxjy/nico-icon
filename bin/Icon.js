/* eslint-disable */

import React from "react";

const defaultStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(67, 90, 111, 0.698)",
  width: "20px",
  height: "20px",
  position: "relative"
};

export default class Icon extends React.Component {
  render() {
    const { width, height, color, ...rest } = this.props;
    const style = { ...defaultStyle, width, height, color };
    return (
      <span style={style} {...rest}>
        {this.props.children}
      </span>
    );
  }
}
