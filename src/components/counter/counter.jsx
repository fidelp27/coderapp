import React, {useState} from "react"
import "./counter.css"

const Counter=({stock, onAdd})=>{


    const[number, setNumber]=useState(0)

    const sumNumber=()=>{
        setNumber(number + 1)
    }

    const subtractNumber=()=>{
        setNumber(number - 1)
    }


    return(
        <div className="counter-container">
            <div className="sum-subs">
                <button className="button-op" onClick={subtractNumber} type="button" disabled={number===0}>-</button>
                <p> {number} </p>            
                <button className="button-op" onClick={sumNumber} type="button" disabled={stock<=number}>+</button>
            </div>
            <div className="button-counter">
                <button className="button-add" onClick={()=>onAdd(number)} type="button" disabled={number===0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter