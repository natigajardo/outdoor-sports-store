import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
//import axios from "axios";

// import firebase
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

// import Componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = ({ match }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let ItemId = match.params.id;

  useEffect(() => {
    const obtenerData = async () => {
      const data = await getDocs(collection(db, "natgeo-products"));
      //setProducts(data.docs);

      const dataItems = data.docs;
      setProduct(dataItems[ItemId - 1].data());
    };
    obtenerData();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [ItemId]);

  return (
    <div className="text-center background-detail-container">
      <h1 className="title-detail-container">ItemDetailContainer</h1>
      <div>
        <p className="text-center pb-5 item-detail-title ">ItemDetail</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <ItemDetail data={product} key={product.id_store} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
