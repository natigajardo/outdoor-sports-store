import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, addItem }) => {
  const [counter, setCounter] = useState(initial);

  const addItems = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      console.log("No hay más stock");
    }
  };

  const restItems = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addProductToCart = () => {
    if (counter > 0) {
      addItem(counter);
    } else {
      console.log("No puedes agregar cero items");
    }
  };

  return (
    <div>
      <div className="btn-group w-100" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={restItems}>
          -
        </button>

        <p className="mx-5 mt-2">{counter}</p>

        <button type="button" className="btn btn-secondary" onClick={addItems}>
          +
        </button>
      </div>

      <div className="btn btn-primary mt-3 w-100" onClick={addProductToCart}>
        Add to Cart
      </div>
    </div>
  );
};

export default ItemCount;
