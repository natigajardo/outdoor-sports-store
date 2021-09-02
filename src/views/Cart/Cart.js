import React, { useContext } from "react";
import "./Cart.css";

//import components
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../components/CartContext/CartContext";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);

  return (
    <div className="cart-section-container">
      <header>{/* Botón continuar comprando que lleve al home  */}</header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p>Tu tienes X items en el Cart</p>
        <button onClick={clear} className="btn btn-info button-clear">
          Limpiar
        </button>
        <div className="cart-items">
          <div className="cart-items-container">
            <div className="items-info">
              {cart.map((item) => {
                return <CartItem dataItem={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
