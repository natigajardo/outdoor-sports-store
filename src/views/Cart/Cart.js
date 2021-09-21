import React, { useContext } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";

//import components
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../components/CartContext/CartContext";

const Cart = () => {
  const { cart, clear, totalItemsCart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-section-container">
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        {totalItemsCart !== 0 ? (
          <p>Tienes {totalItemsCart} items en el Carrito</p>
        ) : (
          <p>Tu carrito está vacío</p>
        )}

        <NavLink to="/" className="btn btn-info">
          Seguir comprando
        </NavLink>

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
                return <CartItem dataItem={item} key={item.id_store} />;
              })}
            </table>
          </div>
        </div>
        <div className="total-cart">
          <p className="d-inline mr-3 align-middle">Total : ${totalPrice} </p>
          {totalPrice !== 0 ? (
            <NavLink to="/form" className="btn btn-info align-middle">
              Comprar
            </NavLink>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Cart;
