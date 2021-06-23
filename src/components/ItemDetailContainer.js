import React, { useEffect, useState } from "react";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

//Bootstrap
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({}) => {
  const [products, setProducts] = useState([]);

  let { Products_id } = useParams();

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${Products_id}?include_attributes=all`)
    .then(res => res.json())
    .then(res => {
      setProducts(res)
    })
  }, []);

  return (
    <Container>
      <ItemDetail item={products} />
    </Container>
  );
};

export default ItemDetailContainer;
