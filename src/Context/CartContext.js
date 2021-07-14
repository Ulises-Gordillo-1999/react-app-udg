import React, { useContext, useState, createContext } from "react";
const CartContext = createContext();

//Costume hook
export function UseCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [price , setPrice] = useState() 
  const [cart, setCart] = useState([]);
  const AddCartContent = (obj, quantity, image, id, precio) => {
    setCart([...cart, { obj: obj, quantity: quantity, image: image, id: id, precio: precio }]); 
  };
  const deleteItem = (key) => {
    let temporal = [...cart];
    temporal.splice(key, 1);
    setCart(temporal);
  };
  const eraseEverything = (key) => {
    let temp = [...cart];
    temp.splice(key);
    setCart(temp);
  };
  const Total = (e) =>{
    let temp= Object.values(e).reduce((acc, {quantity, precio}) => acc + quantity * precio, 0);
    setPrice(temp);
  } 
  return (
    <CartContext.Provider
      value={{ cart, AddCartContent, deleteItem, eraseEverything, Total, price }}
    >
      {children}
    </CartContext.Provider>
  );
}
/*const Total = () =>{
    let suma=0;
    cart.forEach (function(numero){
       suma += numero.precio * numero.quantity;
       setPrice(suma)
  });
  } */
  /*const Total = (e) =>{
    console.log(e)
    let temp= Object.values(e).reduce((acc, {quantity, precio}) => acc + quantity * precio, 0);
    setPrice(temp);
  } */