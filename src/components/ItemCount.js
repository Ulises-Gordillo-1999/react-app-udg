import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./ItemCount.css";
import suma from "../assets/sumar.png";
import resta from "../assets/restar.png";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [clicks, setClicks] = useState(inicial);

  useEffect(() => {
    window.addEventListener("addCart", addCart);
  }, []);

  let increase = 1;
  function Incrementar() {
    if (clicks < stock) {
      setClicks(clicks + increase);
    } else {
      setClicks(clicks);
    }
  }
  function Decrementar() {
    if (clicks > inicial) {
      setClicks(clicks - increase);
    } else {
      setClicks(clicks);
    }
  }

  function addCart() {
    onAdd(clicks);
  }

  return (
    <Container>
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-info" onClick={Decrementar}>
          <Image src={resta} width="30" height="30"></Image>
        </Button>
        <label id="labelItemcount">
          {" "}
          <h2>{clicks}</h2>
        </label>
        <Button variant="outline-info" onClick={Incrementar}>
          <Image src={suma} width="30" height="30"></Image>
        </Button>
      </ButtonGroup>
      <hr></hr>
      {clicks > inicial ? (
        <Button variant="primary" size="lg" onClick={addCart}>
          {" "}
          Add cart
        </Button>
      ) : (
        <h4>Start shopping</h4>
      )}
    </Container>
  );
};

export default ItemCount;
