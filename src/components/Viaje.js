import React from "react";
import ItemCount from "./ItemCount";
import "./Viaje.css";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

const Viaje = ({ viaje, cart, setCart, viajes }) => {
  
  //constante que guarda las propiedades del estado de los viajes
  const { name, precio, id, description, image } = viaje;
/*
  //Funcion para agregar viajes al carrito
  const addViaje = (id) => {
    const viaje = viajes.filter((viaje) => viaje.id === id);
    setCart([...cart, ...viaje])
  };

  //Funcion para eliminar viaje
  const delViaje = (id) => {
    const viajes = cart.filter((viaje) => viaje.id != id);
    setCart(viajes)
  };*/

  return (
    <div className="containerviaje">
      <Card className="productcard">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {name} <hr></hr> $ {precio}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <ItemCount stock={10} inicial={1} />
          {viajes ? (
            <Button variant="primary" size="lg" block type="button" /*onClick={() => addViaje(id)}*/>
              Agregar al carrito
            </Button>
          ) : (
            <div>
              <Button variant="primary" size="sm" type="button" /*onClick={() => delViaje(id)}*/>
                Confirmar
              </Button>

              <Button variant="primary" size="sm" type="button" /*onClick={() => delViaje(id)}*/>
                Eliminar
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Viaje;
