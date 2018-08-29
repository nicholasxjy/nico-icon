/* eslint-disable */

import React from "react";

export default class Icon extends React.Component {
  render() {
    const { size, color, ...rest } = this.props;
    return (
      <span
        style={{
          width: size + "px",
          height: size + "px",
          color
        }}
        className="svgicon"
      >
        {this.props.children}
      </span>
    );
  }
}
