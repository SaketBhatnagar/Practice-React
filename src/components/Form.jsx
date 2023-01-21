import React, { Component } from "react";
import Types from "prop-types";
export default class Form extends Component {
  constructor(props) {
    super();
  }

  render() {
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
            {this.props.data.map(value => {
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
  }
}
// import Types from "prop-types";

Form.defaultProps = {
  data: [
    { name: "India", code: "IN" },
    { name: "Russia", code: "RS" },
  ],
};

Form.propTypes = {
  data: Types.array,
  user: Types.object,
  age: Types.number,
};

// defaultProps, propTypes are React component properties
