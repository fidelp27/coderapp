import React from "react";
import AuthProvider from "../../context/AuthContext";
import CartProvider from "../../context/CartProvider";

const Providers =({children})=>{
    return(
        <AuthProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </AuthProvider>    
    )
}  
export default Providers