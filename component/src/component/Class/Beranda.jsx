import React from "react";
import Product from "./Product";

class Beranda extends React.Component {
  render() {
    return (
      <div>
        <Product
          stock="10"
          name="Oppo y19"
          price="3.300.000"
          img="https://a.ipricegroup.com/media/Maria/handphone_oppo.jpg"
        />
        <Product
          stock="100"
          name="Samsung g20"
          price="1.800.000"
          img="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a042flbdxid/gallery/id-galaxy-a04e-sm-a042-sm-a042flbdxid-534249872?$650_519_PNG$"
        />
        <Product
          stock="23"
          name="IPhone 20"
          price="45.600.000"
          img="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_air_m2_silver_pdp_image_position-1__id_2.jpg"
        />
      </div>
    );
  }
}

export default Beranda;
