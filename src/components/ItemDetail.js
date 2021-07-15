import React, { useState } from "react";
import ItemCount from "./ItemCount";
//Context
import { UseCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
//Bootstrap
import Button from "react-bootstrap/Button";
//import Image from "react-bootstrap/Image";

const ItemDetail = ({ name, id, precio, stock, image }) => {
  //ContextCart
  const { AddCartContent } = UseCart(); //->Cartcontext.Copsumer
  let beginning = 0;
  const [amount, setAmount] = useState(0);

  const onAdd = (e) => {
    setAmount(e.onAdd);
    AddCartContent(name, e, image, id, precio);
  };
  return (
    <div className="card text-center mb-3" id={id}>
      <div className="row no-gutters">
        <div className="col-md-8">
          <img src={image} alt="..." />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h2 className="card-title"> {name} </h2>
            <h3 className="card-title"> ${precio} </h3>
            <h4 className="card-text">Units available {stock}</h4>
            <br></br>
            {amount === 0 ? (
              <ItemCount onAdd={onAdd} stock={stock} inicial={beginning} />
            ) : (
              <Link to="/Cart/Content">
              <Button variant="success">Finalize purchase</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
