import React, { Component } from "react";
import Form from "./components/Form";
import Hello from "./components/Hello";
import data from "./components/Country.json";

class App extends Component {
  constructor() {
    super();

    this.arr = [10, 20, 30];
  }
  render() {
    return (
      <Form data={data} user={{ name: "Chombi", age: 18 }} age="14"></Form>
    );
  }
}

export default App;
