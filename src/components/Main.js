import React, { Component } from "react";
import Card from "./Card";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        res.json().then(data => {
          this.setState({ data: data });
        });
      })
      .catch(err => console.log(err));
    console.log(this.state);
  }
  render() {
    return (
      <section className="main-block">
        <article>
          {this.state.data.map(value => {
            let url = `http://${value.website}`;
            return (
              <Card
                key={value.id}
                name={value.name}
                username={value.username}
                email={value.email}
                city={value.address.city}
                phone={value.phone}
                website={url}
                company={value.company.name}
              />
            );
          })}
        </article>
      </section>
    );
  }
}
