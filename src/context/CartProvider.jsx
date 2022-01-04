import React, {createContext, useContext, useState} from "react";
import { useEffect } from "react/cjs/react.development";
import {getFirestore, addDoc, getDocs, getDoc, collection, doc, updateDoc, deleteDoc, deleteField} from "firebase/firestore"
export const CartContext = createContext()

const CartProvider =({children})=>{
    const[productos, setProductos] = useState([])
    const[cartItem, setCartItem]=useState([])
    const[totalCompra, setTotalCompra] = useState(0)
    const[itemQty, setItemQty] = useState(0)
    const [userEmail, setUserEmail] = useState('')
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
    

    const isOnCart = (product) => {
        return cartItem?.findIndex(item => item.pid === product.pid)
    }
    

    const addToCart =(product, cantidad)=>{
        let total = 0
        
        
        if(isOnCart(product)===-1){
            addDoc(refCart, product)
            .then(({id})=>{
                const ref = doc(db, "cartItems", id)
                updateDoc(ref, {cartId: id, count: cantidad})
            })
            .then(()=>{
                getCartItems()
            })
        }else{
            const ref = cartItem.find(item => item.pid === product.pid)
            const pro = doc(db, "cartItems", ref.cartId)
            updateDoc(pro, {count: ref.count + cantidad})
            .then(()=>{                
                total += product.price * cantidad
                getCartItems()                
            })
            .then(()=> {
                cartItem.map((p) => (setItemQty( p.count )))
                console.log(itemQty);
            })
        }
        setItemQty(itemQty + cantidad)
        
        console.log(total);

        setTotalCompra(total)       
    }
    
    const deleteItemCart = (product) =>{
        let total = totalCompra
        const ref = cartItem.find(item => item.pid === product.pid)
        const pro = doc(db, "cartItems", ref.cartId)
        deleteDoc(pro)
        .then(()=>{
            getCartItems()
        })
        .then(()=>{
            cartItem.map((p) => (total += p.count * p.price))        
            setTotalCompra(totalCompra - product.price * product.count)
            setItemQty(itemQty - product.count )
            getCartItems()
        })                       
    }

    
    const getUser = (form) => {
        setUserEmail(form)
      }  

    useEffect(()=>{       
        getCartItems()
    }, [] )

    return(
        <CartContext.Provider value={{productos, addToCart, cartItem, deleteItemCart, totalCompra, getUser,userEmail, itemQty}}>
            {children}
        </CartContext.Provider>
    )
}

export function useProductos(){
    return useContext(CartContext).productos
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
export function useTotalCompra(){
    return useContext(CartContext).totalCompra
}
export function useItemQty(){
    return useContext(CartContext).itemQty  
}
export function useDeleteAll(){
    return useContext(CartContext).deleteAll
}
export function useGetUser(){
    return useContext(CartContext).getUser
}


export default CartProvider