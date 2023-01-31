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
    fetch("https://api.github.com/users").then(res => {
      res.json().then(data => {
        this.setState({ data: data });
      });
    });
    console.log("--------------------------------------- mounting");
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log("updated state");
    console.log(this.state);
  }

  render() {
    return (
      <section className="main-block">
        <article>
          {this.state.data.map(value => {
            let { login, avatar_url, html_url } = value;
            return (
              <Card
                key={login}
                login={login}
                avatar_url={avatar_url}
                html_url={html_url}
              />
            );
          })}
        </article>
      </section>
    );
  }
}
