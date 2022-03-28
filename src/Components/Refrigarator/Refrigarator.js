import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Refrigarator.css";
const Refrigarator = (props) => {
  const { frize, addToCart } = props;
  const { name, price, url } = frize;

  return (
    <div className="frize-container">
      <img src={url} alt="" />

      <p>Name: {name}</p>
      <p>price: {price}</p>

      <button onClick={() => addToCart(frize)} className="btn">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Refrigarator;
