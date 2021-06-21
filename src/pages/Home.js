import React from "react";
import ItemListContainer from "../components/ItemListContainer";

//Bootstrap
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

//Imagen

function Home() {
  return (
    <Container fluid>
      <h1
        style={{ color: "white", textAlign: "center", fontFamily: "cursive" }}
      >
        Home
      </h1>
      <ItemListContainer />
    </Container>
  );
}

export default Home;
