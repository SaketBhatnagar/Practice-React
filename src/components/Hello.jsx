import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    // props = {name:"chombi"}
    super();
    // this.name = name;
    console.log(props);
  }

  render() {
    console.log(this.props.login);
    return (
      <div>
        Hello World
        {this.props.name}
        {this.props.arr.map(value => {
          return <h3 key={Math.random()}>{value}</h3>;
        })}
        <h1> {this.props.log}</h1>
      </div>
    );
  }
}

export default Hello;
