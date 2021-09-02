import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <p className="number-cart">0</p>
      <i className="fas fa-shopping-cart icon-cart fa-2x"></i>
    </div>
  );
};

export default CartWidget;
