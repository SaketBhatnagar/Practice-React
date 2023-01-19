import React from "react";
import Country from "./Country.json";
const Form = () => {
  let data = Country;
  return (
    <section className="form-block">
      <form>
        <label htmlFor="search">Search Country </label>
        <input
          type="text"
          placeholder="Search here......"
          id="search"
          list="country"
        />

        <datalist id="country">
          {data.map(value => {
            return (
              <option value={value.code} key={value.name}>
                {value.name}
              </option>
            );
          })}
        </datalist>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default Form;
