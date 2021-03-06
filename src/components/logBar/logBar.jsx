import React from "react";
import "./logBar.css"
import { Link } from "react-router-dom";
import { useDataUser, useIsAuth, useLogOut, useOnAuthStateChanged } from "../../context/AuthContext";

const LogBar=()=>{

    const user = useDataUser()
    const onAuthStateChanged = useOnAuthStateChanged
    const isAuth = useIsAuth();
    const logOut = useLogOut()
    onAuthStateChanged()

    return(
        <div className="log-bar-container">
            <div className="greeting-log">
                <p>Whastapp: 1163083418</p>
                <p>fidel2702@gmail.com</p>
            </div>
        {
            isAuth ? 
                <div className="user-box">
                    <span>Hola, {user?.email} </span>
                    <img src="https://i.imgur.com/1aH4pza.png" alt="logout" onClick={()=> logOut()}/> 
                </div> 
                :
                <div className="btn-log-container">
                    <Link to="/login">Ingresar</Link>
                    <Link to="/signin">Registro</Link>   
                </div>
        }

        </div>

    )
}

export default LogBar