import React from "react";
import "./ItemDetail.css";
// Import itemcount
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const onAdd = (cantidad) => {
    console.log(`Compré ${cantidad} items`);
  };

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
          <p className="pt-2">Categoria de producto</p>
          <h3 className="pt-2">${data.price * 1000}</h3>
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
              <ItemCount stock={10} initial={1} addItem={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
