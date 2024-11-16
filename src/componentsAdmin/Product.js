import React, { useState } from "react";
import "./product.css";

function Product(props) {
  const [prodVisible, setProdVisible] = useState(false);

  const activate = () => {
    setProdVisible(!prodVisible);
  };

  return (
    <div className={`product ${prodVisible ? "deactivate" : ""}`}>
      <img className="product-img" src={props.product.image} alt="" />
      <div className="product-content">
        <p className="product-text">{props.product.title}</p>
      </div>
      <button
        variant="primary"
        className="choose"
        onClick={activate}
      >
        Deactivate
      </button>
    </div>
  );
}

export default Product;
