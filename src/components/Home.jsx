import React from "react";
import { userStore } from "../apis/Store";
const Home = () => {
  return (
    <div>
      <h1> Home</h1>
      <userStore.Consumer>
        {value => {
          return <h2>{value}</h2>;
        }}
      </userStore.Consumer>
    </div>
  );
};

export default Home;
