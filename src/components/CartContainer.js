import React from "react";
import { UseCart } from "./CartContext";
import imagen from "../assets/cart.gif";
import Cart from "./Cart";
function CartContainer() {
  const { cart } = UseCart();
  return (
    <div>
      <img
        src={imagen}
        className="animate__animated animate__bounceInRight"
        alt=""
      />
      {console.log(cart)}
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cart.map((itemCart, index) => {
            return (
              <div className="col-md-4" key={itemCart.obj}>
                <div className="card-deck">
                <Cart
                  key={index}
                  name={itemCart.obj}
                  amount={itemCart.quantity}
                  image={itemCart.image}
                  id={itemCart.id}
                />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CartContainer;

//name={itemCart.obj} id={itemCart.id} image={itemCart.image}
