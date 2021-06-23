import React from "react";
import ItemList from "./ItemList";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ItemListContainer() {
  return (
    <Container fluid>
      <Row>
        <ItemList  />
      </Row>
    </Container>
  );
}

export default ItemListContainer;
