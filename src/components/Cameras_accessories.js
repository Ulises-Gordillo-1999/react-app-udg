import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Item from "./Item";

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
    <div className="container d-flex justify-content-center align-items-center h100">
      <div className="row">
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
    </div>
  );
}

export default Cameras_accessories;
