import React, { useState } from "react";
//import ItemCount from "./ItemCount";
//import ModalDetails from "./ModalDetails";
import { Link } from "react-router-dom";
import "./Item.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Item = ({ name, precio, stock, image, id }) => {
  return (
    <div className="card text-center border-secondary h-100  animate__animated animate__backInUp ">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h6 className="card-title"> {name} </h6>
        <h6 className="card-title"> ${precio} </h6>
        <Link to={`/${id}`}>
          <button className="btn btn-info btn-lg " href="#" role="button">
            See Product Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;

/*<Card style={{ width: "22rem" }} className="productcard" id="">
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>
        {name} 
      </Card.Title>
      <Card.Title>
        {precio} 
      </Card.Title>
      <Card.Text>Nos quedan {stock} unidades disponibles</Card.Text> 
      /*<ModalDetails  />
      /*<hr></hr> 
      {/*<ItemCount stock={stock} inicial={beginning} />
      /*<Link to={`/${id}`}>
        <Button variant="info" size="lg" blocktype="button">
          See Product Details
        </Button>
      </Link>
    </Card.Body>
  </Card>*/
