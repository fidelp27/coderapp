import "./cart.css"
import { Link } from "react-router-dom";
import { useItemQty } from "../../context/CartProvider";

const Cart =()=>{
    const itemQty = useItemQty()    
    return(
        <div className="cart-container">
            <Link to="/cart"> <img src="https://i.imgur.com/GreeRZm.png" className="cart-img" alt="cart-shopping"/></Link>
            {itemQty > 0 ? <p className="item-qty">{itemQty}</p> : ""}
        </div>
            
    )
}

export default Cart