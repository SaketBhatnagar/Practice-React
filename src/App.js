import React from "react";
import Store from "./apis/Store";
import Home from "./components/Home";
const App = () => {
  return (
    <Store>
      <Home />
    </Store>
  );
};

export default App;
