import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ name, precio, stock, image, id }) => {
  return (
    <div
      className="card text-center border-dark h-100  animate__animated animate__backInUp "
      id={id}
    >
      <img src={image} className="card-img-top" alt="" />
      <div className="card-body">
        <h6 className="card-title"> {name} </h6>
        <h6 className="card-title"> ${precio} </h6>
        <Link to={`/${id}`}>
          <button className="btn btn-info btn-lg " href="#">
            See Product Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
