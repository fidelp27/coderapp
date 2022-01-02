import React from "react"
import { Link } from "react-router-dom"
import Landing from "../landing"
import { useOnChangeLogIn, useOnSubmitLogIn, useErr, useIsAuth } from "../../context/AuthContext"
import "./log.css"


const LogIn=()=>{
    const onChangeLogIn = useOnChangeLogIn()
    const onSubmitLogIn = useOnSubmitLogIn()
    const isAuth = useIsAuth()
    const err = useErr()



    return(
        <>
        {
        
        isAuth ?
        <Landing /> :
        <div className="form-container">
        <form action="" className="form-container">
            <fieldset className="input-data">
                <legend>Iniciar Sesión</legend>
                <label htmlFor="email">E-mail:
                    <input type="email" placeholder="ingresa tu email" name="email" id="email" onChange={onChangeLogIn}/>
                </label>
                <label htmlFor="password">Contraseña:
                    <input type="password" placeholder="ingresa tu contraseña" name="password" id="password" onChange={onChangeLogIn}/>
                </label>
                {err && <p> ´${err}´</p>}
                <div className="input-button">
                    <button type="submit" onClick={onSubmitLogIn}>Ingresar</button>
                    <p>¿No tenés cuenta? <Link to="/signin">Regístrate</Link></p>
                </div>
            </fieldset>
        </form>
    </div>
        }
        </>
    )
}

export default LogIn