import React, { createContext, useState } from "react";
//import firebase
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "./../../firebase/firebaseConfig";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  // some() por defecto devuelve false, pero es true si algún elemento del array cumple con la condición
  const isInCart = (id) => cart.some((dato) => dato.id === id);

  const addItemCart = (data, cantidad) => {
    if (isInCart(data.id_store)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id_store === data.id_store) {
          return {
            ...cartElement,
            cantidad: cartElement.cantidad + cantidad,
          };
        } else return cartElement;
      });
      return setCart(newCart);
    } else {
      setCart((e) => [...e, { ...data, cantidad }]);
    }
  };

  // Se elimina el item que corresponde al id que estoy pasando.
  const removeItem = (itemId) => {
    // console.log("removeiteminside:", itemId);
    setCart(cart.filter((item) => item.id_store !== itemId));
  };

  const clearCart = () => setCart([]);

  const totalItemsPrice = (dataPrice, dataQuantity) => {
    return dataPrice * dataQuantity;
  };

  const totalItemsCart = cart.reduce((acum, item) => {
    return acum + item.cantidad;
  }, 0);

  const totalPrice = cart.reduce((acum, item) => {
    let itemPrice = item.price * item.cantidad;
    return acum + itemPrice;
  }, 0);

  const newOrder = async (name, phone, email) => {
    if (totalPrice > 0) {
      const docRef = await addDoc(collection(db, "order-products"), {
        name: name,
        email: email,
        phone: phone,
        items: cart,
        total: totalPrice,
        date: Timestamp.fromDate(new Date()),
        state: "generada",
      });
      console.log("Document written with ID: ", docRef.id);
    } else {
      console.log("No puedes comprar 0 productos");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addItemCart,
        removeItem,
        totalItemsPrice,
        totalItemsCart,
        totalPrice,
        newOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
