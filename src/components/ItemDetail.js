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
    <div className="card mb-3" style={{ width: "540rem", height: "38rem" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} alt="..." width="400" height="600" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title"> {name} </h1>
            <h2 className="card-title"> ${precio} </h2>
            <h4 className="card-text">
              Unidades disponibles {stock}
            </h4>
            <br></br>
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
