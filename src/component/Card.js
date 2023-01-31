import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-block">
        <img src={this.props.avatar_url} alt={this.props.login} />
        <h2>{this.props.login}</h2>
        <a href={this.props.html_url}>Github Profile</a>
      </div>
    );
  }
}
