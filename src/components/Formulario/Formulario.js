import React from "react";

const Formulario = ({
  setName,
  name,
  setLastName,
  lastName,
  setEmail,
  email,
  setAddress,
  address,
  setPhone,
  phone,
  setCity,
  city,
  enviarDatos,
}) => {
  return (
    <div>
      <h2>Datos del usuario</h2>

      <form onSubmit={enviarDatos}>
        <div className="row">
          <div className="col">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
          <div className="col">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            ></input>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="phone"
                className="form-control"
                id="phoneNumber"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Dirección</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribe tu dirección"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></input>
          </div>
          <div className="col">
            <label>Ciudad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ciudad"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            ></input>
          </div>
        </div>

        <button className="btn btn-primary mt-3" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
