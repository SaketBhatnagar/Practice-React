import React, { Component } from "react";
import Main from "./component/Main";
import ErrorBoundary from "./component/ErroBoundary";
import Hero from "./component/Hero";

export default class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero name="joker" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </div>
    );
  }
}
