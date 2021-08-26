import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import axios from "axios";
// import Componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = ({ match }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let ItemId = match.params.id;

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/5f41d078-f975-476b-b74a-821424842f85")
      .then((res) => setProduct(res.data[ItemId - 1]));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [ItemId]);

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
