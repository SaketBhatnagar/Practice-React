import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <div className="user-info">
          <div>
            <span>
              {" "}
              <span> Username : </span>
              {this.props.username}
            </span>
            <span>
              {" "}
              <span> Email :</span> {this.props.email}
            </span>
            <span>
              {" "}
              <span> Phone No: </span>
              {this.props.phone}
            </span>
          </div>
        </div>
        <div className="company-info">
          <div>
            <span>
              {" "}
              <span> City :</span> {this.props.city}
            </span>
            <span>
              {" "}
              <span> Company : </span>
              {this.props.company}
            </span>
          </div>
        </div>
        <a href={this.props.website}>Website</a>
      </div>
    );
  }
}
