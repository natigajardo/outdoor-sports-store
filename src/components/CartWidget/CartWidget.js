import React, { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const { totalItemsCart } = useContext(CartContext);

  return (
    <div>
      <p className="number-cart">{totalItemsCart}</p>
      <i className="fas fa-shopping-cart icon-cart fa-2x"></i>
    </div>
  );
};

export default CartWidget;
