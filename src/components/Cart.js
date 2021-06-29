import React from "react";

function Cart({name, amount, image, id }) {
  return (
    <div className="card" style={{width: "18rem"}} id={id}  >
      <img src={image} className="card-img-top img-thumbnail" alt="..." style={{width:"300px", height:"250px"}} />
      <h5 className="card-title">{name} hola </h5>
      <div className="card-body">
        <h5 className="card-text">
         Cantidad agregada: {amount}
        </h5>
      </div>
    </div>
  );
}

export default Cart;
