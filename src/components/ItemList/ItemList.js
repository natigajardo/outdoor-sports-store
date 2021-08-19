import React, { useState, useEffect } from "react";
import "./ItemList.css";
// Importe de elementos
import Item from "../Item/Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  //console.log("estado", products);

  useEffect(() => {
    fetch("https://mocki.io/v1/0f1e147a-8fe9-4c78-9abb-08c2c67493dc")
      .then((response) => response.json())
      .then((respuesta) => {
        setTimeout(() => setProducts(respuesta), 2000);
      });
  }, []);

  return (
    <div className="col-12">
      <div className="row row-propiedades">
        {products.map((product) => {
          return <Item key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
