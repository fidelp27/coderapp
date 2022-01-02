import React from "react";
import Item from "./item";
import "./items.css"

const ItemList=({items})=>{
    return(
        <div className="cards-wrap">
            {
                items.map((item)=>{                    
                    return(
                        <Item key={item.pid} item={item} />
                    )
                })
            }
        </div>
    )
}

export default ItemList