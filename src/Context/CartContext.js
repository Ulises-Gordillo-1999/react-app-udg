import React, { useContext, useState, createContext } from "react";
const CartContext = createContext();

//Costume hook
export function UseCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const AddCartContent = (obj, quantity, image, id) => {
    setCart([...cart, { obj: obj, quantity: quantity, image: image, id: id }]);
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

  return (
    <CartContext.Provider
      value={{ cart, AddCartContent, deleteItem, eraseEverything }}
    >
      {children}
    </CartContext.Provider>
  );
}
