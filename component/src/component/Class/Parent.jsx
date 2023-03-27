import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: 15,
    };
  }

  buyProduct = (quantity) => {
    this.setState({
      stock: this.state.stock - quantity,
    });
  };

  render() {
    return (
      <div>
        <h3>Child 1 </h3>
        <Child1 stock={this.state.stock} fungsi={this.buyProduct.bind(this)} />
        <Child2 stock={this.state.stock} />
      </div>
    );
  }
}
