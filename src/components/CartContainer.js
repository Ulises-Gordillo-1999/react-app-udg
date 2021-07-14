import React, { Fragment, useState,useEffect } from "react";
import { UseCart } from "../Context/CartContext";
import Cart from "./Cart";
import section from "../assets/carrito_ecommerce.jpg";
import "../components/Styles.css";
import Alert from 'react-bootstrap/Alert'
//
import firebase from "firebase/app";
import { getFireStore } from "../Firebase/Firebase";

function CartContainer() {
  const [success, setSuccess] = useState(false)
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
  });

  const { cart } = UseCart();
  const { price } = UseCart();
  const { eraseEverything } = UseCart();
  const { Total } = UseCart();

  const db = getFireStore();

  const ordersCollection = db.collection("orders");
  const newOrder = {
    buyer: datos,
    items: cart,
    total: price,
  };

  function sendOrder() {
    ordersCollection
      .add(newOrder)
      .then(({ id }) => {})
      .catch((e) => {
        console.log(e);
      })
      .finally(setSuccess(true));
  }

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };
  console.log(cart);
  console.log(price);
  useEffect(() => {
   Total(cart);
  }, [cart.length])
  
  return (
    <>
      <img
        id="image"
        src={section}
        className="img-fluid w-100 animate__animated animate__bounceInRight"
        alt="..."
      />
      <div>
        {cart.length !== 0 ? (
          <div className="container  ">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th colSpan="2">Precio total</th>
                  <th colSpan="2">${price} </th>
                </tr>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Quantity</th>
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
                      cart= {cart}
                    />
                  );
                })}
              </tbody>
            </table>
            <Fragment>
              <h1>Formulario</h1>
              <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                    onChange={handleInputChange}
                    name="nombre"
                    required
                  ></input>
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="form-control"
                    onChange={handleInputChange}
                    name="apellido"
                    required
                  ></input>
                </div>
                <div className="col-md-3">
                  <input
                    type="email"
                    placeholder="email"
                    className="form-control"
                    onChange={handleInputChange}
                    name="email"
                    required
                  ></input>
                </div>
                <div className="col-md-3">
                  <input
                    type="number"
                    placeholder="edad"
                    className="form-control"
                    onChange={handleInputChange}
                    name="edad"
                    required
                  ></input>
                </div>
                {success ? 
                  <div className="container">
                    <div className="row justify-content-md-center">
                    <Alert variant="success">
                      <Alert.Heading>Your purchase was successful</Alert.Heading>
                    </Alert>
                    </div>
                  </div>
                  : 
                <>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => eraseEverything()}
                >
                  Erase everything
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => sendOrder()}
                >
                  To buy
                </button>
                </>}
              </form>
            </Fragment>
          </div>
        ) : (
          <h1
            className="text-center"
            style={{
              color: "black",
              fontFamily: "fantasy",
              fontStyle: "italic",
              fontSize: "50px",
            }}
          >
            No product was added
          </h1>
        )}
      </div>
    </>
  );
}

export default CartContainer;