import React from "react"
import { Link } from "react-router-dom"
import "./items.css"


const Item =({item})=>{

    return(        
        <div className="card-container">            
                
        <Link to={`/product/${item.pid}`}>    
            <div className="img-card">                
                <img src={item.img} alt={item.name} />
            </div>
        </Link>   
            <div className="card-info">
                <p className="name"> - {item.name} - </p>
                <p className="price"> ${item.price} </p>
            </div>
        </div>
        
    )
}

export default Item