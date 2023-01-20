import React, { Component } from "react";
import Hello from "./components/Hello";

class App extends Component {
  constructor() {
    super();

    this.arr = [10, 20, 30];
  }
  render() {
    return (
      <div>
        i'm class component
        <br />
        <br />
        <Hello
          name="chombi"
          age={1}
          married="yes"
          arr={this.arr}
          login={true}
        ></Hello>
      </div>
    );
  }
}

// String
// Number
// boolean
// NaN
// Undefined
// Array
// object

// console.log(App);

export default App;
