import React, { useState, useEffect } from "react";
import Item from "./Item";
//import { CardDeck } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";

const ItemList = () => {
  const [consoles, setConsoles] = useState([]);
  const [computacion, setComputacion] = useState([]);
  const [accesorios, setAccesorios] = useState([]);

  useEffect(() => {
    getInformationCon();
    getInformationComp();
    getInformationAccesorios();
  }, []);

  const getInformationCon = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144"
    );
    const users = await data.json();
    //console.log(users.results)
    setConsoles(users.results);
  };
  const getInformationComp = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1648"
    );
    const users = await data.json();
    //console.log(users.results)
    setComputacion(users.results);
  };
  const getInformationAccesorios = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1039"
    );
    const users = await data.json();
    //console.log(users.results)
    setAccesorios(users.results);
  };

  return (
    <div className="row">
      
      {consoles.map((element, index) => {
        return (
          <div className="col-md-4" key={element.id}>
          <Item
            key={index}
            name={element.title}
            id={element.id}
            precio={element.price}
            stock={element.available_quantity}
            image={element.thumbnail}
          />
          </div>
        );
      })}
      {computacion.map((element, index) => {
        return (
          <div className="col-md-4" key={element.id}>
          <Item
            key={index}
            name={element.title}
            id={element.id}
            precio={element.price}
            stock={element.available_quantity}
            image={element.thumbnail}
          />
           </div>
        );
      })}
      {accesorios.map((element, index) => {
        return (
          <div className="col-md-4" key={element.id}>
          <Item
            key={index}
            name={element.title}
            id={element.id}
            precio={element.price}
            stock={element.available_quantity}
            image={element.thumbnail}
          />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
