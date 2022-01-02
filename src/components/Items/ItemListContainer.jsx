import React, {useState, useEffect, useContext} from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

const ItemListContainer =({saludo})=>{
    const[items, setItems] = useState([])
    const{catId} = useParams()
    const[loading, setLoading] = useState(true)
    const {productos} = useContext(CartContext)


    useEffect(()=>{
        setLoading(true)
        const getProducts = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
        getProducts
        .then((res)=>{
            catId ? setItems(res.filter((item)=> item.category === catId)) : 
            setItems(res)
        })
        .finally(()=>{
            setLoading(false)
        })
    
    },[catId, productos])

    return( loading ? <div className="loader"><img src="https://i.imgur.com/QFIfMFX.gif" alt="loading" /></div> :
        <div>
            <h1> {saludo} </h1>
            <ItemList items={items} />        
        </div>
    )
}

export default ItemListContainer