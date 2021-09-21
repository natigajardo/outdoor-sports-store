import React from "react";
import "./Home.css";

//import de componentes
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div>
      <div className="header"></div>

      <ItemListContainer greeting="Productos" />
    </div>
  );
};

export default Home;
