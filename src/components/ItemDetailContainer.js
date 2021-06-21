import React, { useState } from "react";
import Item from "./Item";

//Bootstrap
import Container from "react-bootstrap/Container";
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from "react-bootstrap/CardGroup";

const ItemDetailContainer = ({ viajes }) => {
  /*const [productos, setProductos] = useState([]);

   function getCartItems() {
    let miPromesa = new Promise((resolve, reject) => {
      setTimeout(function () {
        const error = false;
        if (!error) {
          resolve(viajes);
        }

        reject("Error obteniendo los datos :(");
      }, 2000);
    });

    miPromesa
      .then(function (valor) {
        setProductos(viajes);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        //alert("Promesa terminada");
      });
  }*/
  return (
    <Container>
      {/*<button className="btn btn-primary" onClick={getCartItems}>
        See Product Details
      </button> */}
      <Container className="detail-container">
        <CardDeck>
          {viajes.map((props) => (
            <>
              <Item
                
                name={props.name}
                description={props.description}
                image={props.image}
                stock={props.stock}
                precio={props.precio}
              ></Item>
              <hr />
            </>
          ))}
        </CardDeck>
      </Container>
    </Container>
  );
};

export default ItemDetailContainer;
