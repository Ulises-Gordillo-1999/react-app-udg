import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

//Bootstrap
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([null]);

  let { Products_id } = useParams();
  useEffect(() => {
   obtenerDatos()
  }, [])

const obtenerDatos = async() => {
  const data = await fetch(`https://api.mercadolibre.com/items/${Products_id}?include_attributes=all`)
  const users = await data.json()
  console.log(users)
  setItem(users)
}

  /*useEffect(() => {
    fetch(
      `https://api.mercadolibre.com/items/${Products_id}?include_attributes=all`
    )
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
        console.log(res)
      });
  }, []);*/

  return (
    <Container>
      {item !== null ? (
        
        <ItemDetail item={item} />
      ) : (
        <p>cargando</p>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
