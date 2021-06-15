import React from "react";
import './Item.css';
function Item(props) {
  return (
    <div id={props.id} className="container">
      <img src={props.image} width="700" height="240"></img>
      <div className="circleUi" />
      <h3>{props.name} <hr></hr> ${props.precio}</h3>
      <p className="description">{props.description}</p>
      <p>
        <small>Nos quedan {props.stock} unidades</small>
      </p>
    </div>
  );
}

export default Item;
