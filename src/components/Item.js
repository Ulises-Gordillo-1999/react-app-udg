import React from "react";
//import ItemCount from "./ItemCount";
//import ModalDetails from "./ModalDetails";
import { Link } from "react-router-dom";
import "./Item.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Item = ({ name, precio, stock, image, id }) => {
  return (
    <Card style={{ width: "22rem" }} className="productcard" id="">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {name} 
        </Card.Title>
        <Card.Title>
          ${precio} 
        </Card.Title>
        {/* <Card.Text>Nos quedan {stock} unidades disponibles</Card.Text> */}
        {/*<ModalDetails  />*/}
        {/*<hr></hr> */}
        {/*<ItemCount stock={stock} inicial={beginning} /> */}
        <Link to={`/${id}`}>
          <Button variant="info" size="lg" blocktype="button">
            See Product Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
