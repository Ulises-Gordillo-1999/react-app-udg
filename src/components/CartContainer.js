import React, {Fragment, useState} from "react";
import { UseCart } from "../Context/CartContext";
import Cart from "./Cart";
import Button from "react-bootstrap/Button";
import section from "../assets/carrito_ecommerce.jpg";
import "../components/Styles.css";
//
import * as firebase from 'firebase';
import '@firebase/firestore'
import {getFireStore } from '../Firebase/Firebase'

function CartContainer() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: ''
})

  const { cart } = UseCart();
  const { eraseEverything } = UseCart();

  const db =  getFireStore()

  const ordersCollection = db.collection("orders");
  const newOrder = {
    buyer: datos,
    items: cart,
   
    total: 10,
  }

  function sendOrder(){
    ordersCollection.add(newOrder).then(({id})=>{
    }).catch(e => {console.log(e)}).finally(console.log('se termino'))
  }

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

  console.log(cart)
  console.log(cart.length)
  console.log(datos)
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
       <Fragment>
            <h1>Formulario</h1>
            <form className="row" >
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre" required></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange}  name="apellido" required></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="email" className="form-control" onChange={handleInputChange}  name="email" required></input>
                </div>
                <div className="col-md-3">
                    <input type="number" placeholder="edad" className="form-control" onChange={handleInputChange}  name="edad" required></input>
                </div>
            </form>
        </Fragment>
     </div>
        ) : (
          <h1 className="text-center" style={{ color: "blue", fontFamily: "fantasy",fontStyle:"italic", fontSize:"50px" }}>no se agrego ningun producto</h1>
        )}
        {cart.length !== 0 ? (
          <div>
          <Button size="lg" onClick={() => eraseEverything()}>Erase everything</Button>
          <Button type="submit" size="lg" onClick={() => sendOrder()}>To buy</Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default CartContainer;
/* 
{cart.length !== 0 ? (
          <div>
          <Button size="lg" onClick={() => eraseEverything()}>Erase everything</Button>
          <Button size="lg" onClick={() => sendOrder()}>To buy</Button>
          </div>
        ) : (
          <></>
        )}
*/