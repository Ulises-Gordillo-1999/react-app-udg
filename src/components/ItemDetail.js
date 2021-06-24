import React, { useState } from "react";
import ItemCount from "./ItemCount";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ name, id, precio, stock, image }) => {
  let beginning = 0;
  const [amount, setAmount] = useState(0);

  const onAdd = (e) => {
    setAmount(e.onAdd);
  };

  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1
          style={{ color: "black", textAlign: "center", fontFamily: "cursive" }}
        >
          {name}
        </h1>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
            </Card>
          </Col>
          <Col>
            <h1>${precio} </h1>

            {amount === 0 ? (
              <ItemCount onAdd={onAdd} stock={stock} inicial={beginning} />
            ) : (
              <Button variant="success">Terminar Compra</Button>
            )}
            <hr></hr>
            <h2>Nos quedan {stock} unidades disponibles </h2>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default ItemDetail;
