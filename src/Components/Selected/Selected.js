import React from "react";
import "./Selected.css";
const Selected = (props) => {
  const { url, name } = props.cart;
  return (
    <div className="selected">
      <img src={url} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Selected;
