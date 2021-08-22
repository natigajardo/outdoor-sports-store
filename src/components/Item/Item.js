import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4 ">
      <div>
        <div className="view zoom overlay z-depth-2 rounded">
          <img
            className="img-fluid w-100"
            src={data.picture}
            alt={data.title}
          ></img>
        </div>

        <div className="text-center pt-4 border-bottom1">
          <h5 className="card-title">{data.title}</h5>
          <h6 className="mb-4 price-text">Precio: {data.price * 1000}</h6>
        </div>
      </div>
    </div>
  );
};

export default Item;
