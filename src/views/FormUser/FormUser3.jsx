import React, { useContext, useState } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
import { useFormik } from "formik";
import Confirm2 from "../../components/Confirm/Confirm2";

const validate = (values) => {
  const errors = {};
  const simbolsErrorMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneNumbersOnly = /^[0-9]+$/;

  if (!values.name) {
    errors.name = "Campo requerido";
  } else if (values.name.length < 3) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.phone) {
    errors.phone = "Campo requerido";
  } else if (!phoneNumbersOnly.test(values.phone)) {
    errors.phone = "Solo debe contener números";
  } else if (values.phone.length < 9) {
    errors.phone = "Debe contener mínimo 8 números";
  }

  if (!values.email) {
    errors.email = "Tu email es requerido";
  } else if (!simbolsErrorMail.test(values.email)) {
    errors.email = "Email inválido";
  }

  if (!values.emailVerificacion) {
    errors.emailVerificacion = "Verificar tu email es requerido";
  } else if (values.emailVerificacion !== values.email) {
    errors.emailVerificacion = "Tus correos no coinciden";
  }

  return errors;
};

const FormUser3 = () => {
  const { newOrder, clearCart } = useContext(CartContext);
  const [orderSave, setOrderSave] = useState(false);
  const [saveEmailUser, setSaveEmailUser] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      emailVerificacion: "",
      phone: "",
    },

    validate,

    onSubmit: (values) => {
      newOrder(values.name, values.phone, values.email);
      setSaveEmailUser(values.email);
      setOrderSave(true);
      clearCart();
    },
  });

  return (
    <div>
      {orderSave === false ? (
        <form onSubmit={formik.handleSubmit} className="container p-5">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tu nombre completo"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          <br></br>
          <label>Teléfono</label>
          <input
            type="text"
            className="form-control"
            placeholder="+56 - tu número"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
          <br></br>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="tunombre@mail.com"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <br></br>
          <label>Verificación email</label>
          <input
            type="email"
            className="form-control"
            placeholder="tunombre@mail.com"
            {...formik.getFieldProps("emailVerificacion")}
          />
          {formik.touched.emailVerificacion &&
          formik.errors.emailVerificacion ? (
            <div>{formik.errors.emailVerificacion}</div>
          ) : null}
          <br></br>
          <button type="submit" className="btn btn-info">
            Enviar
          </button>
        </form>
      ) : (
        <Confirm2 userEmail={saveEmailUser} />
      )}
    </div>
  );
};

export default FormUser3;
