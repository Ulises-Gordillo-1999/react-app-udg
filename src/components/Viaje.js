import React from 'react';
import ItemCount from './ItemCount';
import ModalDetails from './ModalDetails'
import  './Viaje.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Viaje = ({ viaje, cart, setCart, viajes }) => {

  //constante que guarda las propiedades del estado de los viajes
  const { name, precio, id, description, image } = viajes;

  return (
    <Card className="productcard" id={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {name} <hr></hr> $ {precio}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <hr></hr>
        <ModalDetails
        viajes={viajes}/>
        <hr></hr> 
        <ItemCount stock={10} inicial={1} />
        <hr></hr>
        <Button
          variant="primary"
          size="lg"
          block
          type="button" /*onClick={() => addViaje(id)}*/
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Viaje;
