import React from "react";
import "./CSS/product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Buy",
      status: "Available",
      disabled: false,
    };
  }

  btnBuy = () => {
    this.setState({
      stock: this.state.stock - 1,
    });
    if (this.state.stock === 1) {
      this.setState({
        status: "Not Available",
        disabled: true,
        sub: "Sold Out",
      });
    }
  };

  render() {
    return (
      <div className="box-stocks">
        <h2>{this.props.name}</h2>
        <img src={this.props.img} alt="oppo" />
        <p>
          <strong>Rp.{this.props.price}</strong>
        </p>
        <p>{this.state.stock}</p>
        <button
          className="btn-click"
          onClick={this.btnBuy}
          disabled={this.state.disabled}
        >
          {this.state.sub}
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Product;
