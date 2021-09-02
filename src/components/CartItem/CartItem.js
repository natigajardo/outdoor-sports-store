import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

import "./CartItem.css";

const CartItem = ({ dataItem }) => {
  const { removeItem } = useContext(CartContext);

  // console.log(dataItem.id);

  const totalItemsPrice = (dataPrice, dataQuantity) => {
    return dataPrice * dataQuantity;
  };

  return (
    <div className="row card-cart">
      <div className="col-3">
        <img
          className="img-fluid w-100 text-center"
          src={dataItem.picture}
          alt={dataItem.title}
        ></img>
      </div>

      <div className="col-3 text-center">
        <p>Artículo </p>
        <hr />
        {dataItem.title}
      </div>

      <div className="col-1 text-center">
        <p>Precio </p>
        <hr />${dataItem.price}
      </div>

      <div className="col-3 text-center">
        <p>Cantidad </p>
        <hr />
        {dataItem.cantidad}
      </div>

      <div className="col-1 text-center">
        <p>Total: </p>
        <hr />${totalItemsPrice(dataItem.price, dataItem.cantidad)}
      </div>

      <div className="col-1 text-center">
        <p>Borrar</p>
        <hr />
        <button
          className="btn fas fa-trash-alt text-center"
          onClick={() => removeItem(dataItem.id)}
        ></button>
      </div>
    </div>
  );
};

export default CartItem;
