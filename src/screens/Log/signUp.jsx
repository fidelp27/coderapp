import React from "react";
import { Link } from "react-router-dom";
import "./log.css"
import { useOnChangeSignUp, useOnSubmitSignUp, useIsAuth} from "../../context/AuthContext"
import Landing from "../landing";

const SignIn=()=>{

    const onChangeSignUp = useOnChangeSignUp()
    const onSubmitSignUp = useOnSubmitSignUp()
    const isAuth = useIsAuth()
    

    return(
        <>
        {
            isAuth ? <Landing /> :
            <div className="form-container">
            <form action="" className="form-container-data">                
                <fieldset className="input-data">
                    <legend>Crear cuenta</legend>           
                     <label htmlFor="name">  Nombre y Apellido:        
                        <input type="text" name="name" id="name" onChange={onChangeSignUp}/>
                    </label>                    
                    <label htmlFor="email">E-mail:
                        <input type="email" name="email" id="email" onChange={onChangeSignUp}/>
                    </label>
                    <label htmlFor=""> Contraseña: 
                        <input type="password" name="password" onChange={onChangeSignUp}/>
                    </label>                    
{/*                     <label htmlFor=""> Confirmar Contraseña: 
                        <input type="password" onChange={onChangeSignUp}/>
                    </label>   */}              
                <div className="input-button">
                    <button type="submit" onClick={onSubmitSignUp}>Registrar</button>
                    <p>¿Ya tenés cuenta? <Link to="/login">Accede</Link></p>
                </div>
                </fieldset>
            </form>
        </div>

        }
        </>

            )
}
export default SignIn