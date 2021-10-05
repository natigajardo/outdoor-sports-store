import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//firestore
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const Confirm2 = ({ userEmail }) => {
  const [orderComplete, setOrderComplete] = useState({});
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const obtenerData = async () => {
      const q = query(
        collection(db, "order-products"),
        orderBy("date", "desc"),
        limit(1)
      );

      const collectionTest = await getDocs(q);

      collectionTest.forEach((doc) => {
        const dataOrders = doc.data();

        if (dataOrders.email === userEmail) {
          //console.log(userEmail, doc.data());
          setOrderComplete(dataOrders);
          setOrderId(doc.id);
        }
        //setOrderId(doc.id);
      });
    };

    obtenerData();
  }, []);

  //console.log("orden obtenida", orderComplete);

  return (
    <div className="container m-5">
      <div className="my-3">
        <h2>Datos de Orden</h2>
        <hr></hr>
        <h3>Número de orden: {orderId}</h3>
        <div className="row">
          <div className="col mt-2">
            <h4 className="title-confirm-table pb-2">Datos del usuario</h4>
            <p>Nombre: {orderComplete.name}</p>
            <p>Email: {orderComplete.email}</p>
            <p>Telefono: {orderComplete.phone}</p>
          </div>
          <div className="col mt-2">
            <h4 className="title-confirm-table">Resumen de compra</h4>
            <p>Total: {orderComplete.total}</p>
          </div>
        </div>
        <NavLink to="/">
          <button className="btn btn-info text-center">Volver al Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Confirm2;
