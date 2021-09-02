import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  // some() por defecto devuelve false, pero es true si algún elemento del array cumple con la condición
  const isInCart = (id) => {
    cart.some((item) => item.id === id);
  };

  const addItemCart = (data, cantidad) => {
    if (isInCart(data.id)) {
      //cartElement es un objeto ya existente. Por lo que si el id corresponde, toma el elemento del cart (carrito viejo) y lo crea de nuevo sumandole la nueva cantidad de items.
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === data.id) {
          return { data, cantidad: cartElement.cantidad + cantidad };
        } // si el elemento existe pero no corresponde el id, solo se muestra tal cual.
        else return cartElement;
      });
      //actualiza el cart con la funcion newCart
      setCart(newCart);
    } else {
      // prev es el carrito anterior
      // ...item es todo el objeto del producto que incluye id, title, etc.
      // como es un objeto nuevo, no hay que revisar si existe y lo agrega al final de la lista {}
      setCart((prev) => [...prev, { ...data, cantidad }]);
    }
  };

  // Se elimina el item que corresponde al id que estoy pasando.
  const removeItem = (itemId) => {
    console.log("removeiteminside:", itemId);
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, clear, addItemCart, removeItem, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
