import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Item from "./Item";

function Consoles() {
  const [consoles, setConsoles] = useState([]);
  useEffect(() => {
    getInformationCon();
  }, []);
  const getInformationCon = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144"
    );
    const users = await data.json();
    setConsoles(users.results);
  };
  return (
    <CardColumns>
      {consoles.map((element, index) => {
        return (
          <Item
            key={index}
            name={element.title}
            id={element.id}
            precio={element.price}
            stock={element.available_quantity}
            image={element.thumbnail}
          />
        );
      })}
    </CardColumns>
  );
}

export default Consoles;
