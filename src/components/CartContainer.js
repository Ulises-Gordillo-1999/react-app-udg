import React from "react";
import { UseCart } from "../Context/CartContext";
import Cart from "./Cart";
import Button from "react-bootstrap/Button";
import section from "../assets/carrito_ecommerce.jpg";
import "../components/Styles.css";

function CartContainer() {
  const { cart } = UseCart();
  const { eraseEverything } = UseCart();
  return (
    <>
      <img
        id="image"
        src={section}
        className="img-fluid w-100 animate__animated animate__bounceInRight"
        alt="..."
      />
      <div>
        {console.log(cart)}
        <div className="container  ">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product name</th>
                <th scope="col">added quantity</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((itemCart, index) => {
                return (
                  <Cart
                    key={index}
                    name={itemCart.obj}
                    amount={itemCart.quantity}
                    image={itemCart.image}
                    id={itemCart.id}
                    indice={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        {console.log(cart.length)}
        {cart.length !== 0 ? (
          <Button onClick={() => eraseEverything()}>borrar todo</Button>
        ) : (
          <p style={{ color: "red" }}>no hay nada</p>
        )}
      </div>
    </>
  );
}

export default CartContainer;
