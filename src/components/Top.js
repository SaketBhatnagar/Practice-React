import React, { Component } from "react";

export default class Top extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(prop, state) {
    console.log("static method");
    return { count: state.count };
  }

  shouldComponentUpdate() {
    console.log("should update");
    // if (this.state.count <= 5) {
    //   return false;
    // }
    return true;
  }

  getSnapshotBeforeUpdate(prevprop, prevstate) {
    console.log("snapshot");
    return null;
  }

  componentDidMount(prevprop, prevstate, snapshot) {
    console.log("component mounted");
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component update");
  }

  componentWillUnmount() {
    alert("you are trying to unmount component");
  }

  render() {
    console.log("render method");

    return (
      <section className="top-block">
        <article>
          <h1>{this.state.count}</h1>
        </article>
      </section>
    );
  }
}
