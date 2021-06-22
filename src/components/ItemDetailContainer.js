import React, { useState } from "react";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

//Bootstrap
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { Button } from "react-bootstrap";

const ItemDetailContainer = ({ viajes }) => {
  const [products, setProducts] = useState();
  return (
    <Container>
      <Button variant="info" size="lg" blocktype="button" onClick={() => setProducts()} >
        See Product Details
      </Button>
      {/*<ItemDetail />  */}
    </Container>
  );
};

export default ItemDetailContainer;
