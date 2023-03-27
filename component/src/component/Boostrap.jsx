import React, { Component } from "react";
import Jumbotron from "./Functional/Jumbotron";
import Main from "./Functional/Main";
import NavComp from "./Functional/NavComp";

export default class Boostrap extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavComp />
        <Jumbotron />
        <Main />
      </div>
    );
  }
}
