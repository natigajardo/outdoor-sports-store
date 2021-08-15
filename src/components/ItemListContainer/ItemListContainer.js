import React from "react";
import "./ItemListContainer.css";
import ItemCount from "./../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => {
    console.log(`Compré ${cantidad} items`);
  };

  return (
    <div className="item-list-container container-fluid">
      <div className="row">
        <h1 className="title-products text-center col-12">Productos</h1>
        <h2 className="text-center col-12">{greeting}</h2>
        <ItemCount stock={10} initial={1} addItem={onAdd} />
      </div>
    </div>
  );
};

export default ItemListContainer;
