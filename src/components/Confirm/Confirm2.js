import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

//firestore
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

// import
import { CartContext } from "../../components/CartContext/CartContext";

const Confirm2 = ({ orderIdGenerate }) => {
  const [orderComplete, setOrderComplete] = useState({});
  const { clear } = useContext(CartContext);

  useEffect(() => {
    const obtenerData = async () => {
      const collectionTest = await getDocs(collection(db, "tests2"));

      collectionTest.forEach((doc) => {
        if (doc.id === orderIdGenerate) {
          //console.log(doc.id, " => ", doc.data());
          setOrderComplete(doc.data());
        }
      });
    };

    obtenerData();
  }, []);

  console.log("orden obtenida", orderComplete.buyer);

  return (
    <div>
      <div className="my-3">
        <h2>Datos de Orden</h2>
        <hr></hr>
        <h3>Número de orden: {orderIdGenerate}</h3>
        <div className="row">
          <div className="col mt-2">
            <h4 className="title-confirm-table">Datos del usuario</h4>
            <p>Nombre: </p>
            <p>Apellido:</p>
            <p>Email: </p>
            <p>Telefono:</p>
            <p>Dirección: </p>
            <p>Ciudad: </p>
          </div>
          <div className="col mt-2">
            <h4 className="title-confirm-table">Resumen de compra</h4>
            <p>Total: {orderComplete.total}</p>
          </div>
        </div>
        <NavLink to="/">
          <button onClick={clear} className="btn btn-info text-center">
            Volver al Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Confirm2;
