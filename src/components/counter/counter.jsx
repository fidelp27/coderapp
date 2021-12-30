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
            <button onClick={subtractNumber} type="button" disabled={number===0}>-</button>
            <p> {number} </p>            
            <button onClick={sumNumber} type="button" disabled={stock<=number}>+</button>
            <button onClick={()=>onAdd(number)} type="button" disabled={number===0}>Agregar al carrito</button>
        </div>
    )
}

export default Counter