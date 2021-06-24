import React from 'react';
import logo from '../assets/carrito-de-compras.png';
import { BsFillBagFill } from "react-icons/bs";

function CartWidget(){
    return (
    <img src= {logo} width="30" height="30" className="d-inline-block align-top" alt="cart" />
    //<BsFillBagFill />
    );
}
export default CartWidget;