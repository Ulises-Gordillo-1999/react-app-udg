import React from "react";

//Bootstrap
import Card from "react-bootstrap/Card";

function ItemDetail() {
  return (
    <div>
      <h1
        style={{ color: "black", textAlign: "center", fontFamily: "cursive" }}
      >
        ItemDetail
      </h1>
      <Card className="item-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>
             <hr></hr> $ 
          </Card.Title>
          <Card.Text>
           
            <hr></hr>
            Nos quedan  unidades disponibles
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
