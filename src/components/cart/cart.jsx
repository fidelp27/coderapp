import "./cart.css"
import { useOpenCart } from "../../context/CartProvider";

const Cart =()=>{
    
    const openCart = useOpenCart();
    return(
        <div className="cart-container">
            <img src="https://i.imgur.com/GreeRZm.png" className="cart-img" alt="cart-shopping" onMouseOver={()=>openCart()} onMouseOut={()=>openCart()}/>
        </div>
            
    )
}

export default Cart