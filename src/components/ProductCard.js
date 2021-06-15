import React from "react";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./ProductCard.css"

function ProductCard(props) {
  return (
    <div id="Product">
      <Card className="productcard"  id={props.id} >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            {props.name} <hr></hr> $ {props.precio}
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <ItemCount stock={10} inicial={1} />
          <Button variant="primary" size="lg" block>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductCard;
