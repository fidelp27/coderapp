import React, {createContext, useContext, useState} from "react";
import { useEffect } from "react/cjs/react.development";
import {getFirestore, addDoc, getDocs, collection, doc, updateDoc} from "firebase/firestore"

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
            setProductos(snapShot.docs.map((doc)=>({pid: doc.id, ...doc.data()})))
        })
    }, [] )

    const getCartItems = () =>{
        getDocs(refCart)
        .then((snapShot)=>{
            setCartItem(snapShot.docs.map((doc)=>({...doc.data()})))
        })
    }


    
    const openCart=()=>{
        setCartOpen(!cartOpen)
    }

    const isOnCart = (product) => {
        return cartItem?.findIndex(item => item.pid === product.pid)
    }
    

    const addToCart =(product)=>{
        if(isOnCart(product)===-1){
            addDoc(refCart, product)
            .then(({id})=>{
                const ref = doc(db, "cartItems", id)
                updateDoc(ref, {cartId: id, count: 1})
            })
            .then(()=>{
                getCartItems()
            })
        }else{
            const ref = cartItem.find(item => item.pid === product.pid)
            const pro = doc(db, "cartItems", ref.cartId)
            updateDoc(pro, {count: ref.count + 1}).then(()=>{
                getCartItems()
            })
        }       
    }
    
    const deleteItemCart = (product) =>{
        setCartItem(cartItem.filter(item => item.pid !== product.pid))
    }

    useEffect(()=>{       
        getCartItems()
    }, [] )
    console.log(productos);
    return(
        <CartContext.Provider value={{productos, cartOpen, openCart, addToCart, cartItem, deleteItemCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useProductos(){
    return useContext(CartContext).productos
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