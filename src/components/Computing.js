import React, {useState, useEffect} from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Item from "./Item";

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
    console.log(users.results);
    setComputacion(users.results);
  };

  return (
    <CardColumns>
      {computacion.map((element, index) => {
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

export default Computing;
