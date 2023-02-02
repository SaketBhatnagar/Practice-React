import React, { Component } from "react";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    console.log("hero");
    console.log(props);
    if (props.name == "joker") {
      throw new Error("i'm not Joker , You Chombuu");
    }
  }

  render() {
    return <div className="hero"> i'm Super Hero</div>;
  }
}
