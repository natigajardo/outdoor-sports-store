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
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="card style-card text-center">
          <div className="card-body">
            <h5 className="card-title">Producto 1</h5>
            <div
              className="btn-group w-100"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={restItems}
              >
                -
              </button>
              <p className="mx-5 mt-2">{counter}</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={addItems}
              >
                +
              </button>
            </div>
            <div
              className="btn btn-primary mt-3 w-100"
              onClick={addProductToCart}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
