import React, { Component } from "react";
import Top from "./components/Top";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ display: false });
    }, 10000);
  }

  render() {
    return <div>{this.state.display ? <Top /> : ""}</div>;
  }
}
