import React, { useContext } from "react";
import "./Confirm.css";
import { NavLink } from "react-router-dom";

// import
import { CartContext } from "../../components/CartContext/CartContext";

const Confirm = ({
  orderIdGenerate,
  name,
  lastName,
  email,
  address,
  phone,
  city,
}) => {
  const { clear, totalPrice } = useContext(CartContext);

  return (
    <div className="my-3">
      <h2>Datos de Orden</h2>
      <hr></hr>
      <h3>Número de orden: {orderIdGenerate}</h3>
      <div className="row">
        <div className="col mt-3">
          <h4 className="title-confirm-table">Datos del usuario</h4>
          <p>Nombre: {name}</p>
          <p>Apellido: {lastName}</p>
          <p>Email: {email}</p>
          <p>Telefono: {phone}</p>
          <p>Dirección: {address}</p>
          <p>Ciudad: {city}</p>
        </div>
        <div className="col">
          <h4 className="title-confirm-table">Resumen de compra</h4>
          <p>Total: {totalPrice}</p>
        </div>
      </div>
      <NavLink to="/">
        <button onClick={clear} className="btn btn-info text-center">
          Volver al Home
        </button>
      </NavLink>
    </div>
  );
};

export default Confirm;
