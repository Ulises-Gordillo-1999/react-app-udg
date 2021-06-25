import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

//Bootstrap
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([null]);

  let { Products_id } = useParams();
  useEffect(() => {
    getInformation();
  }, []);

  const getInformation = async () => {
    const data = await fetch(
      `https://api.mercadolibre.com/items/${Products_id}?include_attributes=all`
    );
    const users = await data.json();
    //console.log(users)
    setItem(users);
  };

  return (
    <div className="container animate__animated animate__rotateInDownLeft">
      <div className="row justify-content-center">
      {item !== null ? (
        <ItemDetail
          name={item.title}
          id={item.id}
          precio={item.price}
          stock={item.available_quantity}
          image={item.thumbnail}
        />
      ) : (
        <p>cargando</p>
      )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
