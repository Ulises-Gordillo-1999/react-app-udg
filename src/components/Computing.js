import React, { useState, useEffect } from "react";
//import CardColumns from "react-bootstrap/CardColumns";
import Item from "./Item";
import section from "../assets/ecommerce.jpg";
import "./Styles.css";

function Computing() {
  const [computacion, setComputacion] = useState([]);
  useEffect(() => {
    getInformationComp();
  }, []);
  const getInformationComp = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1648"
    );
    const users = await data.json();
    //console.log(users.results);
    setComputacion(users.results);
  };

  return (
    <div>
      <img
        src={section}
        id="image"
        className="img-fluid w-100 animate__animated animate__jackInTheBox"
        alt="..."
      />
      <div className="container d-flex justify-content-center align-items-center h100">
        <div className="row">
          {computacion.map((element, index) => {
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
    </div>
  );
}

export default Computing;
