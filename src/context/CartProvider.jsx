import React, {createContext, useContext, useState} from "react";
import { useEffect } from "react/cjs/react.development";
import { products } from "../components/Items/productos";

export const CartContext = createContext()

const CartProvider =({children})=>{
    const[productos, setProductos] = useState([])
    const[cartOpen, setCartOpen]=useState(false)
    const[cartItem, setCartItem]=useState([])


    
    useEffect(()=>{    
        setProductos(products.map((i)=> i))
    },[]) 

    
    const openCart=()=>{
        setCartOpen(!cartOpen)
    }

    const isOnCart = (product) => {
        return cartItem?.findIndex(item => item.id === product.id)
    }
    

    const addToCart =(product)=>{
        if(isOnCart(product)===-1){
            setCartItem([...cartItem, product])    
        }else{
            alert("ya tienes el producto agregado")
        }       
    }
    
    const deleteItemCart = (product) =>{
        setCartItem(cartItem.filter(item => item.id !== product.id))
    }

    return(
        <CartContext.Provider value={{productos, cartOpen, openCart, addToCart, cartItem, deleteItemCart}}>
            {children}
        </CartContext.Provider>
    )
}
export function useCartOpen(){
    return useContext(CartContext).cartOpen
}
export function useOpenCart(){
    return useContext(CartContext).openCart
}
export function useAddToCart(){
    return useContext(CartContext).addToCart
}
export function useCartItem(){
    return useContext(CartContext).cartItem
}
export function useDeleteItemCart(){
    return useContext(CartContext).deleteItemCart
}

export default CartProvider