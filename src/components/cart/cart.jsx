import "./cart.css"
import { useOpenCart } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const Cart =()=>{
    
    const openCart = useOpenCart();
    return(
        <div className="cart-container">
            <Link to="/cart"> <img src="https://i.imgur.com/GreeRZm.png" className="cart-img" alt="cart-shopping" onMouseOver={()=>openCart()} onMouseOut={()=>openCart()}/></Link>
        </div>
            
    )
}

export default Cart