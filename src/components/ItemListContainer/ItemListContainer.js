import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import firebase
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

//import components
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const obtenerData = async () => {
      const data = await getDocs(collection(db, "natgeo-products"));
      //setProducts(data.docs);

      const dataItems = data.docs;
      //console.log(dataItems);
      //setProducts(dataItems);

      categoryId
        ? setProducts(dataItems.filter((e) => e.data().category === categoryId))
        : setProducts(dataItems);
    };
    obtenerData();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [categoryId]);

  return (
    <div className="item-list-container container">
      <div className="row">
        {/* <h1 className="title-products text-center col-12">ItemListContainer</h1> */}
        <h1 className="text-center col-12">{greeting}</h1>

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
