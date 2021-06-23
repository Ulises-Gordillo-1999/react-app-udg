import React from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from "./ItemDetail";
import ModalDetails from "./ModalDetails";
import { Link } from "react-router-dom";
import "./Viaje.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Viaje = ({ name, price, stock, image, id }) => {
  //constante que guarda las propiedades del estado de los viajes
  //const { name, precio, id, description, image } = viajes;

  return (
    <Card style={{width:"22rem"}} className="productcard" id="">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {name} <hr></hr> {price}
        </Card.Title>
        <Card.Text>Nos quedan {stock} unidades disponibles</Card.Text>
        {/*  <ModalDetails  />*/}
        <hr></hr>
        <ItemCount stock={10} inicial={1} />
        <hr></hr>
        {/*<ItemDetailContainer viajes={viajes} /> */}
        <Link to={`/${id}`}>
          <Button
            variant="info"
            size="lg"
            blocktype="button" /*href={`/Item/${id}`}*/
          >
            See Product Details
          </Button>
        </Link>
        {/*<Button
          variant="info"
          size="lg"
          block
          type="button" onClick={() => addViaje(id)}
        >
          Agregar al carrito
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default Viaje;
