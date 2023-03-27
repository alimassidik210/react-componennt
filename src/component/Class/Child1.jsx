import React, { Component } from "react";

export default class Child1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  minBuy = 1;
  render() {
    return (
      <div>
        <p> Stock Product : {this.props.stock}</p>
        <button onClick={() => this.props.fungsi(this.minBuy)}>Buy</button>
      </div>
    );
  }
}
