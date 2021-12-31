import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail";
import { products } from "../Items/productos";
import "./itemDetail.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
     const[product, setProduct] = useState([])
     const{prodId} = useParams()
     const[loading, setLoading] = useState(true)
     const[goCart, setGoCart] = useState(false)

     useEffect(()=>{
         setLoading(true)
         const getProduct = new Promise((resolve, reject)=>{
             setTimeout(()=>{
                 resolve(products)
             },2000)
         })
     
     getProduct
     .then((res)=>{
        prodId ? setProduct(res.find((item)=> item.id === prodId)) :
        setProduct(res)
     })
     .finally(()=>{
        setLoading(false)
    })

    },[])

    const onAdd=(cantidad)=>{
        console.log({...product, cantidad:cantidad});
        setGoCart(true)
    }

    return( loading ? <div className="loader"><img src="https://i.imgur.com/JUfhIPA.gif" alt="loading" /></div> :
        <ItemDetail product={product} onAdd={onAdd} goCart={goCart} />
    )
}
export default ItemDetailContainer