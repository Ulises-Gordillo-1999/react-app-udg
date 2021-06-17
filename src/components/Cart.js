import React from 'react';
import './Cart.css';
import logo from '../assets/carrito-de-compras.png';
//Importo el componente viaje
import Viaje from './Viaje';

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <img src={logo} width="40" height="50"></img>
      <div className="cart_count">{cart.lenght}</div>
      {cart.lenght === 0 ? (
        <p>0</p>
      ) : (
        cart.map((viaje) => (
          <Viaje key={viaje.id} viaje={viaje} cart={cart} setCart={setCart} />
        ))
      )}
    </div>
  );
};

export default Cart;
