import React, {createContext, useContext, useState} from "react";
import { useEffect } from "react/cjs/react.development";
import {getFirestore, addDoc, getDocs, collection} from "firebase/firestore"

export const CartContext = createContext()

const CartProvider =({children})=>{
    const[productos, setProductos] = useState([])
    const[cartOpen, setCartOpen]=useState(false)
    const[cartItem, setCartItem]=useState([])
    const db = getFirestore()
    const ref = collection(db, "products")
    const refCart = collection(db, "cartItems")

    useEffect(()=>{       
        getDocs(ref)
        .then((snapShot)=>{
            setProductos(snapShot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }, [] )

    useEffect(()=>{       
        getDocs(refCart)
        .then((snapShot)=>{
            setCartItem(snapShot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }, [cartItem] )
    
    const openCart=()=>{
        setCartOpen(!cartOpen)
    }

    const isOnCart = (product) => {
        return cartItem?.findIndex(item => item.id === product.id)
    }
    

    const addToCart =(product)=>{
        if(isOnCart(product)===-1){
            addDoc(refCart, product)
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