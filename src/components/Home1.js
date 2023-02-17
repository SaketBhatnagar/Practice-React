import React, { useContext } from "react";
import { userStore } from "../apis/Store";
const Home1 = () => {
  let { setCity, handleSubmit } = useContext(userStore);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="city name...."
          onChange={e => setCity(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <section></section>
    </div>
  );
};

export default Home1;
