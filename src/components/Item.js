import React from "react";
import './Item.css';
function Item(props) {
  return (
    <div id={props.id} className="container">
      <div className="circleUi" />
      <h3>{props.name}</h3>
      <p className="description">{props.description}</p>
      <p>
        <small>Nos quedan {props.stock} unidades</small>
      </p>
    </div>
  );
}

export default Item;
