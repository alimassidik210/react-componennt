import React from "react";
import Product from "./Product";

class Beranda extends React.Component {
  render() {
    return (
      <div>
        <Product stock="10" name="Oppo y19" price="3.300.000" />
        <Product stock="100" name="Samsung g20" price="1.800.000" />
        <Product stock="23" name="IPhone 20" price="4.600.000" />
      </div>
    );
  }
}

export default Beranda;
