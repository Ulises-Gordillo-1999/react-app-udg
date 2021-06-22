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
      <Button
        variant="info"
        size="lg"
        block
        type="button"
        onClick=""
      >
        See Product Details
      </Button>
      <Container className="detail-container"> {/* <ItemDetail />} */}</Container>
    </Container>
  );
};

export default ItemDetailContainer;
