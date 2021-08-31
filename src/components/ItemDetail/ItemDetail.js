import React, { useState } from "react";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
// Import itemcount
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const [addQuantity, setAddQuantity] = useState(null);

  const onAdd = (cantidad) => {
    //console.log(`Compré ${cantidad} items`);
    if (cantidad > 0) {
      setAddQuantity(cantidad);
    }
  };

  if (addQuantity > 0) {
    console.log("item agregado:", addQuantity);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img
            src={data.picture}
            alt={data.title}
            className="picture-detail"
          ></img>
        </div>

        <div className="col-sm-12 col-md-6 text-left">
          <h2>{data.title}</h2>
          <h3 className="pt-2">${data.price}</h3>
          <p className="pt-2">
            <span className="font-weight-bold">Descripción del producto: </span>
            <br />
            {data.description}
          </p>
          <p className="pt-2">
            <span className="font-weight-bold">Detalles del producto:</span>
            <br /> {data.especificacion}
          </p>
          <br></br>
          <div className="row">
            <div className="col-6">
            {/* Se agregó el contador vs botón  */}
            { (addQuantity === null) ? 
                <ItemCount stock={10} initial={1} addItem={onAdd} />
               :
                <NavLink to="/cart">
                  <button type="button" className="btn btn-warning">
                    Terminar mi compra
                  </button>
                </NavLink>
              }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
