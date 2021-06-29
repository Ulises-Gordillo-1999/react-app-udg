import React, {useContext, useState, createContext} from 'react'
const CartContext = createContext()

//Costume hook
export function UseCart(){
    return useContext(CartContext)
}

export function CartProvider({children}) {

    const [cart, setCart] = useState([])
    const AddCartContent = (obj, quantity, image, id) =>{
        setCart([...cart, {'obj': obj, 'quantity': quantity, 'image': image, 'id': id}])
    }

    return (
        <CartContext.Provider value={{cart, AddCartContent}}>
            {children}
        </CartContext.Provider>
    )
}

