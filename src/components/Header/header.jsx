import React from "react";
import Cart from "../cart/cart";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./header.css"

const Header =()=>{
    return(
    <div className="nav-bar">
        <Logo />
        <Menu />
        <Cart />        
    </div>
  )  
}

export default Header