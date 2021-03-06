import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

//import componentes
import logo from "./../../assets/images/nglogo2.png";
import CartWidget from "./../CartWidget/CartWidget";
import { CartContext } from "../CartContext/CartContext";

function NavBar() {
  const { totalItemsCart } = useContext(CartContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light menu-navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-brand">
          <img src={logo} className="logo-img" alt="logo" />
        </div>

        {totalItemsCart !== 0 ? (
          <NavLink to="/cart" className="cart-icon-md-sm text-decoration-none">
            <CartWidget />
          </NavLink>
        ) : null}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <p className="nav-link">Nosotros</p>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Productos
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <p
                to="/products"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categor??as
              </p>
              <div
                className="dropdown-menu text-center style-dropdown"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink to="/category/mochila" className="dropdown-item">
                  Mochilas
                </NavLink>
                <NavLink to="/category/bolso" className="dropdown-item">
                  Bolsos
                </NavLink>
                <NavLink to="/category/carpa" className="dropdown-item">
                  Carpas
                </NavLink>
                <NavLink to="/category/banano" className="dropdown-item">
                  Bananos
                </NavLink>
              </div>
            </li>

            <li className="nav-item">
              <p className="nav-link">Tours</p>
            </li>
          </ul>
        </div>

        {totalItemsCart !== 0 ? (
          <NavLink to="/cart" className="cart-icon-lg-xl text-decoration-none">
            <CartWidget />
          </NavLink>
        ) : null}
      </nav>
    </div>
  );
}

export default NavBar;
