import "./App.css";
//Import de componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola soy un item!" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
