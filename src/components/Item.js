import React from "react";
import "./Item.css";

//Bootstrap
import Card from "react-bootstrap/Card";

function Item(props) {
  return (
    <Card className="item-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          {props.name} <hr></hr> $ {props.precio}
        </Card.Title>
        <Card.Text>
          {props.description}
          <hr></hr>
          Nos quedan {props.stock} unidades disponibles
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
