import React, { useContext, useRef } from "react";
import { userStore } from "../apis/Store";

// useRef hook
const Card = () => {
  let { data } = useContext(userStore);
  let divRef = useRef("");

  console.log(data);

  let handleColor = () => {
    console.log(divRef);
    divRef.current.style.backgroundColor = "red";
    console.log(divRef);
  };

  if (data) {
    return (
      <div ref={divRef}>
        <h1>{data[0].base}</h1>
        <h2>{data[0].name}</h2>
        <h3>
          {data[0].main.temp} <sup>o</sup>C
        </h3>
        <button onClick={handleColor}> Change Color </button>
      </div>
    );
  } else {
    return <h1>Search city....</h1>;
  }
};

export default Card;
