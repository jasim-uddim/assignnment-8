import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Shop.css";
import Refrigarator from "./../Refrigarator/Refrigarator";
const Shop = () => {
  const [frize, setFrize] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFrize(data));
  }, []);
  const addToCart = (frizes) => {
    if (cart.length !== 4) {
      const storedCart = [...cart, frizes];
      setCart(storedCart);
    } else {
      alert("Already 4 Item selected");
    }
  };
  const allClear = () => {
    setCart([]);
  };
  const chooseOne = () => {
    const randomNumber = Math.floor(Math.random() * cart.length);

    setCart([cart[randomNumber]]);
  };

  return (
    <div className="main-container">
      <div className="shop-container">
        {frize.map((frize) => (
          <Refrigarator
            frize={frize}
            key={frize.id}
            addToCart={addToCart}
          ></Refrigarator>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} allClear={allClear} randomNumber={chooseOne}></Cart>
      </div>
    </div>
  );
};

export default Shop;
