import React from "react";
import { UseCart } from "./CartContext";

function Cart({name, amount, image, id, key, indice }) {
  //const { cart } = UseCart();
  const {deleteItem} = UseCart()


  return (
    <div className="card" style={{width: "18rem"}} id={id}  >
      <img src={image} className="card-img-top img-thumbnail" alt="..." style={{width:"300px", height:"250px"}} />
      <h5 className="card-title">{name} hola </h5>
      <div className="card-body">
        <h5 className="card-text">
         Cantidad agregada: {amount}
        </h5>
        <button onClick={()=> deleteItem(indice)}>
          borrar
        </button>
      </div>
    </div>
  );
}

export default Cart;
