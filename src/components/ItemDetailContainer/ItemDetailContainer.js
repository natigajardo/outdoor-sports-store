import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import axios from "axios";
// import Componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //console.log(product);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/0f1e147a-8fe9-4c78-9abb-08c2c67493dc")
      .then((res) => setProduct(res.data[Math.floor(Math.random() * 5)]));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="text-center background-detail-container">
      <h1 className="title-detail-container">ItemDetailContainer</h1>
      <div>
        <p className="text-center pb-5 item-detail-title ">ItemDetail</p>
        {isLoading ? <Spinner /> : <ItemDetail data={product} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
