import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  // some() por defecto devuelve false, pero es true si algún elemento del array cumple con la condición
  const isInCart = (id) => cart.some((dato) => dato.id === id);

  const addItemCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return {
            ...cartElement,
            cantidad: cartElement.cantidad + cantidad,
          };
        } else return cartElement;
      });
      return setCart(newCart);
    } else {
      setCart((e) => [...e, { ...item, cantidad }]);
    }
  };

  // Se elimina el item que corresponde al id que estoy pasando.
  const removeItem = (itemId) => {
    console.log("removeiteminside:", itemId);
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, clear, addItemCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
