import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./CartItem.css";

const CartItem = ({ dataItem }) => {
  const { removeItem, totalItemsPrice } = useContext(CartContext);

  // console.log(dataItem.id);

  // const totalItemsPrice = (dataPrice, dataQuantity) => {
  //   return dataPrice * dataQuantity;
  // };

  return (
    <tbody>
      <tr>
        <td>
          <img
            className="img-fluid w-100 text-center img-cart-item"
            src={dataItem.picture}
            alt={dataItem.title}
          ></img>
        </td>
        <td>{dataItem.title}</td>
        <td className="text-center">{dataItem.price}</td>
        <td className="text-center">{dataItem.cantidad}</td>
        <td className="text-center">
          {totalItemsPrice(dataItem.price, dataItem.cantidad)}
        </td>
        <td className="text-center">
          <button
            className="btn fas fa-trash-alt text-center"
            onClick={() => removeItem(dataItem.id_store)}
          ></button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
