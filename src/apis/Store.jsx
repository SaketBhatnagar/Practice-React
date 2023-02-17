import React, { createContext, useEffect, useState } from "react";
export const userStore = createContext("Default");
const Store = props => {
  let [city, setCity] = useState("");
  let [data, setData] = useState(false);
  let [search, setSearch] = useState(false);

  useEffect(() => {
    if (search) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6afd13eb3627e76136352d0eb59bda49&units=metric`
      ).then(res =>
        res.json().then(arr => {
          setData([arr]);

          console.log(arr);
        })
      );
    }
    setSearch(false);
  }, [search]);

  let handleSubmit = e => {
    e.preventDefault();
    setSearch(true);
    console.log("searching....");
  };

  return (
    <userStore.Provider value={{ setCity, handleSubmit, data }}>
      {props.children}
    </userStore.Provider>
  );
};
export default Store;
