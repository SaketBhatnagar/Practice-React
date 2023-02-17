import React from "react";
import Store from "./apis/Store";
import Card from "./components/Card";
import Home1 from "./components/Home1";
import Home from "./components/Home1";

import ErrorBoundary from "./Error Boundary/ErrorBoundary";
const App = () => {
  return (
    <ErrorBoundary>
      <Store>
        <Home1 />
        <Card />
      </Store>
    </ErrorBoundary>
  );
};

export default App;
