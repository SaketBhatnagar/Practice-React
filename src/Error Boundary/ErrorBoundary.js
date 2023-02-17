import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super();
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
