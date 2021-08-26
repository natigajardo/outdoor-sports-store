import React from "react";
import "./Home.css";

//import de componentes
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <ItemListContainer greeting="Hola soy un item!" />
    </div>
  );
};

export default Home;
