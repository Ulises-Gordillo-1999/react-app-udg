import React, { useState, useEffect } from "react";
import Viaje from "./Viaje";
//import { CardDeck } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns'

const ItemList = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
      .then(res => res.json())
      .then(res => {
        setProducts(res.results);
        //console.log(res);
      });
  },[]);

  return (
    <div>
      <CardColumns>    
        {Products.map((element, index) => { return (
           
           <Viaje key={index} name={element.title} id={element.id} precio={element.price} stock={element.available_quantity} image={element.thumbnail} /> 
        )
          
        })}

      </CardColumns>
    </div>
  );
};

export default ItemList;
