import React, { useState, useEffect } from "react";

const Main = () => {
  //   let [dat, setData] = useState([]);
  //   useEffect(() => {
  //     // side-effects
  //     let fetchData = async () => {
  //       try {
  //         let res = await fetch("https://api.github.com/users");
  //         let data1 = await res.json();
  //         setData(data1);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username{" "}
        <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <br />
        Password{" "}
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Main;
