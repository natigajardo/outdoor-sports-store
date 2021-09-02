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
          <div className="table-responsive container-cart-item pt-3">
            <table className="table ">
              <thead>
                <tr>
                  <th className="col-3">Imagen</th>
                  <th className="col-2">Articulo</th>
                  <th className="col-1 text-center">Precio</th>
                  <th className="col-2 text-center">Cantidad</th>
                  <th className="col-1 text-center">Total</th>
                  <th className="col-1 text-center">Borrar</th>
                </tr>
              </thead>

              {cart.map((item) => {
                return <CartItem dataItem={item} key={item.id} />;
              })}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
