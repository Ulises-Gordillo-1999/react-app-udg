import React, { useState, useEffect } from "react";
import Item from "./Item";
//import { CardDeck } from "react-bootstrap";
//import CardColumns from "react-bootstrap/CardColumns";
import {getFireStore} from '../Firebase/Firebase'

const ItemList = () => {
  const [consoles, setConsoles] = useState([]);
  const [computacion, setComputacion] = useState([]);
  const [accesorios, setAccesorios] = useState([]);
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("menu")
    itemCollection.get().then((querySnapshot) => {
     setProductos(querySnapshot.docs.map(doc=> doc.data()));
   })   
    /*getInformationCon();
    getInformationComp();
    getInformationAccesorios();*/
  }, []);
  console.log(productos)

  /*const getInformationCon = async () => {
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
  };*/

  return (
    <div className="row">
      {productos.map((element, index) => {
        return (
          <div className="col-xs-3 col-md-3 mb-3" key={element.id}>
            <Item
              key={index}
              name={element.name}
              id={element.id}
              precio={element.price}
              stock={element.available_quantity}
              image={
                element.image
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
