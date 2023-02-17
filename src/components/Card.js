import React, { useContext } from "react";
import { userStore } from "../apis/Store";

const Card = () => {
  let { data } = useContext(userStore);
  console.log(data);

  if (data) {
    return (
      <div>
        <h1>{data[0].base}</h1>
        <h2>{data[0].name}</h2>
        <h3>
          {data[0].main.temp} <sup>o</sup>C
        </h3>
      </div>
    );
  } else {
    return <h1>Search city....</h1>;
  }
};

export default Card;
