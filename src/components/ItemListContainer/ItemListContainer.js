import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import components
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("https://mocki.io/v1/5f41d078-f975-476b-b74a-821424842f85")
      .then((response) => response.json())
      .then((respuesta) => {
        setTimeout(() => {
          //console.log(respuesta.filter((x) => x.category === categoryId));
          categoryId
            ? setProducts(respuesta.filter((x) => x.category === categoryId))
            : setProducts(respuesta);
          setIsLoading(false);
        }, 2000);
      });
  }, [categoryId]);

  return (
    <div className="item-list-container container">
      <div className="row">
        <h1 className="title-products text-center col-12">ItemListContainer</h1>
        <h2 className="text-center col-12">{greeting}</h2>

        {categoryId ? (
          <h2 className="text-center col-12">Categoría: {categoryId}</h2>
        ) : null}

        <div className="col-12 p-4">
          {isLoading ? (
            <Spinner />
          ) : (
            <ItemList className="col-12" products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
