import React, { useContext, useState } from "react";
import "./FormUser.css";

//import components
import { CartContext } from "../../components/CartContext/CartContext";
import Formulario from "../../components/Formulario/Formulario";
import Confirmacion from "../../components/Confirm/Confirm";

//import firebase
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const FormUser = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [orderSave, setOrderSave] = useState(false);
  const [orderId, setOrderId] = useState("");

  //Datos del formulario
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const enviarDatos = async (e) => {
    e.preventDefault();
    //console.log(name);
    if (
      !name.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city.trim() ||
      totalPrice === 0
    ) {
      alert("Has dejado un campo vacío o tu carrito esta vacío");
    } else {
      try {
        const docRef = await addDoc(collection(db, "orders"), {
          buyer: {
            name: name,
            lastname: lastName,
            email: email,
            phone: phone,
            address: address,
            city: city,
          },
          items: cart,
          total: totalPrice,
          date: Timestamp.fromDate(new Date()),
        });
        //console.log(Timestamp.fromDate(new Date()));
        console.log("Document written with ID: ", docRef.id);
        // guardar el id generado autmatico
        setOrderId(docRef.id);
        // cambiar estado de la orden a guardado true
        setOrderSave(true);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <div className="container my-5">
      {orderSave === false ? (
        <Formulario
          setName={setName}
          name={name}
          setLastName={setLastName}
          lastName={lastName}
          email={email}
          setEmail={setEmail}
          setAddress={setAddress}
          address={address}
          setPhone={setPhone}
          phone={phone}
          setCity={setCity}
          city={city}
          enviarDatos={enviarDatos}
        />
      ) : (
        <Confirmacion
          orderIdGenerate={orderId}
          name={name}
          lastName={lastName}
          email={email}
          address={address}
          phone={phone}
          city={city}
        />
      )}
    </div>
  );
};

export default FormUser;
