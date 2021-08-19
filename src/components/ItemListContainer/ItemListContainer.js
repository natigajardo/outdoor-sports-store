import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container container">
      <div className="row">
        <h1 className="title-products text-center col-12">Productos</h1>
        <h2 className="text-center col-12">{greeting}</h2>
        <ItemList className="col-12" />
      </div>
    </div>
  );
};

export default ItemListContainer;
