import React, { useState, useEffect } from "react";
import Item from "./Item";
//import { CardDeck } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns'

const ItemList = () => {
  const [consoles, setConsoles] = useState([]);
  const [computacion, setComputacion] = useState([]);
  const [accesorios, setAccesorios] = useState([]);
  
  useEffect(() => {
    getInformationCon()
    getInformationComp()
    getInformationAccesorios()
  }, [])

  const getInformationCon = async() => {
    const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1144")
    const users = await data.json()
    console.log(users.results)
    setConsoles(users.results)
  }
  const getInformationComp = async() => {
    const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
    const users = await data.json()
    //console.log(users.results)
    setComputacion(users.results)
  }
  const getInformationAccesorios = async() => {
    const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1039")
    const users = await data.json()
    //console.log(users.results)
    setAccesorios(users.results)
  }




  return (
      <CardColumns>    
        {consoles.map((element, index) => { return (
           
           <Item key={index} name={element.title} id={element.id} precio={element.price} stock={element.available_quantity} image={element.thumbnail} /> 
        )
          
        })}
        {computacion.map((element, index) => { return (
           
           <Item key={index} name={element.title} id={element.id} precio={element.price} stock={element.available_quantity} image={element.thumbnail} /> 
        )
          
        })}
        {accesorios.map((element, index) => { return (
           
           <Item key={index} name={element.title} id={element.id} precio={element.price} stock={element.available_quantity} image={element.thumbnail} /> 
        )
          
        })}

      </CardColumns>
  );
};

export default ItemList;
