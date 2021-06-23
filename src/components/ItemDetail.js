import React from "react";

//Bootstrap
import Card from "react-bootstrap/Card";

const ItemDetail = ({item}) => {
  console.log(item)
  return (
    <div>
      <h1
        style={{ color: "black", textAlign: "center", fontFamily: "cursive" }}
      >
        ItemDetail
      </h1>
      <Card className="item-card">
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>
            {item.title} <hr></hr> ${item.price} 
          </Card.Title>
          <Card.Text>
            <hr></hr>
            Nos quedan unidades {item.available_quantity} disponibles
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
