import React, { Component } from "react";

export default class ErroBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  componentDidCatch(err, errinfo) {
    console.log(err);
    console.log(errinfo);
  }

  render() {
    if (this.state.isError) {
      return <div className="hero"> you have error</div>;
    } else return <div>{this.props.children}</div>;
  }
}
