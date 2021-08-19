import React from "react";
import "./Item.css";
// Import itemcount
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ data }) => {
  const onAdd = (cantidad) => {
    console.log(`Compré ${cantidad} items`);
  };

  return (
    <div className="card style-card col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <img src={data.picture} className="card-img-top" alt="productos"></img>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"></li>
          <li className="list-group-item price-text">
            Precio: ${data.price * 1000}
          </li>
          <li className="list-group-item"></li>
        </ul>
        <ItemCount stock={10} initial={1} addItem={onAdd} />
      </div>
    </div>
  );
};

export default Item;
