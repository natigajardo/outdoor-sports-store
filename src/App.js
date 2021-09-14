import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";

//Import de componentes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//import de views
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/products" component={ItemListContainer}></Route>
            <Route
              path="/category/:categoryId"
              component={ItemListContainer}
            ></Route>
            <Route path="/item/:id" component={ItemDetailContainer}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
