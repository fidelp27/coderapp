import React from "react";
import "./logo.css"
import { Link } from "react-router-dom";

const Logo =()=>{
    return(
    <div className="logo-container">
        <Link to="/"><img src="https://i.imgur.com/EqEwhp7.png" className="img-logo" alt="logo" /></Link>
    </div>
    )
}

export default Logo