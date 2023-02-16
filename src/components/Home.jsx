import React from "react";
import { userStore } from "../apis/Store";
const Home = () => {
  return (
    <div>
      <h1> Home</h1>
      <userStore.Consumer>
        {value => {
          return (
            <div>
              <h1> {value.count}</h1>
              <br />

              <button onClick={value.handleIncrement}>Increment</button>
              <button onClick={value.handleDecrement}>Decrement</button>
            </div>
          );
        }}
      </userStore.Consumer>
    </div>
  );
};

export default Home;
