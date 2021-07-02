import React, { useState, useEffect } from "react";
//import CardColumns from "react-bootstrap/CardColumns";
import Item from "./Item";
import section from '../assets/ecommerce.jpg'
import './Styles.css'

function Cameras_accessories() {
  const [accesorios, setAccesorios] = useState([]);
  useEffect(() => {
    getInformationAccesorios();
  }, []);

  const getInformationAccesorios = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1039"
    );
    const users = await data.json();
    console.log(users.results);
    setAccesorios(users.results);
  };

  return (
    <>
    <img id="image" src={section} className="img-fluid w-100 animate__animated animate__fadeInUp" alt="..."/>
    <div className="container d-flex justify-content-center align-items-center h100">
      <div className="row">
      {accesorios.map((element, index) => {
        return (
          <div className="col-sm-3" key={element.id}>
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
    </div>
    </>
  );
}

export default Cameras_accessories;
