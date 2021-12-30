import React from "react";
import { useCartItem, useCartOpen, useDeleteItemCart} from "../../context/CartProvider";
import Cart from "../cart/cart";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./header.css"

const Header =()=>{
    const cartOpen = useCartOpen()
    const cartItem = useCartItem()
    const deleteItemCart = useDeleteItemCart()

    return(
    <div className="nav-bar">
        <Logo />
        <Menu />
        <Cart />
        {
          cartOpen  ? 
         (<div className="modal-container">
            <div className="modal-cart">
              {
                cartItem?.map((item)=>{
                  return(
                    <div className="modal-cart-container">
                      <div className="modal-cart-items">
                        <img src={item.img} alt={item.name} />
                        <p className="modal-name">{item.name} </p>
                        <p className="modal-name">${item.price} </p>
                        <img src="https://i.imgur.com/llsKyYw.png"  className="button-garbage" alt="garbage" onClick={()=> deleteItemCart(item)} />

                      </div>
                    </div>
                    
                  )
                })
              }
               
            </div>
          </div>) 
        : "" 
        }
        
    </div>
  )  
}

export default Header