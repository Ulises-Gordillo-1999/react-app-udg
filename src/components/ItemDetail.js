import React, { useState } from "react";
import ItemCount from "./ItemCount";

//Bootstrap
import Button from "react-bootstrap/Button";
//import Image from "react-bootstrap/Image";

const ItemDetail = ({ name, id, precio, stock, image }) => {
  let beginning = 0;
  const [amount, setAmount] = useState(0);

  const onAdd = (e) => {
    setAmount(e.onAdd);
  };

  return (
    <div class="card mb-3" style={{ width: "540rem", height: "38rem" }}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={image} alt="..." width="400" height="600" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {name} </h5>
            <h5 class="card-title"> ${precio} </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            {amount === 0 ? (
              <ItemCount onAdd={onAdd} stock={stock} inicial={beginning} />
            ) : (
              <Button variant="success">Terminar Compra</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
