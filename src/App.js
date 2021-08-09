import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola soy un item!"/>
      <ItemListContainer greeting="Hola soy otro item!"/>
    </div>
  );
}

export default App;
