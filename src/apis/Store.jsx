import React, { createContext, useState } from "react";

export const userStore = createContext("Default");

const Store = props => {
  let [count, setCount] = useState(0);

  return (
    <userStore.Provider value={count}>{props.children}</userStore.Provider>
  );
};
export default Store;
