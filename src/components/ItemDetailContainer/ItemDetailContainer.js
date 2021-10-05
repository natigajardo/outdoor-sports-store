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
  const [productExists, setProductExists] = useState(false);
  let ItemId = match.params.id;

  useEffect(() => {
    const obtenerData = async () => {
      const data = await getDocs(collection(db, "natgeo-products"));
      //setProducts(data.docs);

      const dataItems = data.docs;

      if (ItemId <= dataItems.length) {
        setProduct(dataItems[ItemId - 1].data());
        setProductExists(true);
      } else {
        alert("Este producto no existe");
      }
    };
    obtenerData();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [ItemId]);

  return (
    <div className="text-center background-detail-container">
      <div>
        {isLoading || productExists === false ? (
          <Spinner />
        ) : (
          <ItemDetail data={product} key={product.id_store} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
