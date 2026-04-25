/* eslint-disable no-unused-vars */
import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle,handleCart }) => {
  const { img, name, price, stock } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <p>{name}</p>
      <p>Price:${price}</p>
      <p>{stock}remaining</p>
      <button onClick={()=>handleCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
