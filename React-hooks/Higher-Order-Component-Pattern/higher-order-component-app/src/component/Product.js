import React from "react";
import "./Product.css";











function Product({ style }) {
    console.log(style)
  return (
    <div className="product_data">
      <div className="name" style={{ ...style }}>
        Product Name
      </div>
      <div className="description">Product description goes here</div>
      <div className="footer_name">Footer</div>
    </div>
  );
}
export default Product;
