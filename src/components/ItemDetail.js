import React from "react";
import ItemCount from "./ItemCount";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
//import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
  
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1
          style={{ color: "black", textAlign: "center", fontFamily: "cursive" }}
        >
          {item.title}
        </h1>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.thumbnail} />
            </Card>
          </Col>
          <Col>
            <h1>${item.price} </h1>
            <ItemCount stock={10} inicial={1}/>
            <hr></hr>
            <Button variant="primary" size="lg"> Add cart</Button>
            <hr></hr>
            <h2>Nos quedan {item.available_quantity} unidades disponibles </h2>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default ItemDetail;
