import React from "react"
import { Link } from "react-router-dom"
import { useAddToCart } from "../../context/CartProvider"
import "./items.css"


const Item =({item})=>{
    const addToCart = useAddToCart()

    return(        
        <div className="card-container">
            <div className="icon-cart">
                <img src="https://i.imgur.com/xRuZm4H.png" alt="icon-cart" onClick={()=>addToCart(item)}/>
            </div>
                
        <Link to={`/product/${item.id}`}>    
            <div className="img-card">                
                <img src={item.img} alt={item.name} />
            </div>
        </Link>   
            <div className="card-info">
                <p className="name"> {item.name} - {item.id} </p>
                <p className="price"> ${item.price} </p>
            </div>
        </div>
        
    )
}

export default Item