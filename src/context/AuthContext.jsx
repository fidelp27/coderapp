import React, { createContext, useContext, useState } from "react"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"

/* Crear el contexto */
export const AuthContext = createContext()

/* Se encarga de toda la funcionalidad que vamos a pasar a otros componentes */
const AuthProvider =({children})=>{

    const [createUser, setCreateUser] = useState({})
    const [logUser, setLogUser] = useState({})
    const [user, setUser] = useState()
    const [err, setErr] = useState()
    const [isAuth, setIsAuth] = useState(false)
    const auth = getAuth()



    /* Tomar datos del imput con el atributo name para el registro*/
    const onChangeSignUp =(evt)=>{
        setCreateUser({
            ...createUser, [evt.target.name]: evt.target.value
        })
    }

    /* Ingresar con el usuario y contraseña y validar que no estén vacíos los campos para el registro */
    const onSubmitSignUp = (evt)=>{
        evt.preventDefault()
        if(createUser.email !== "" && createUser.password !== ""){
            
            createUserWithEmailAndPassword(auth, createUser?.email, createUser?.password) 
            .then(()=> alert("Usuario Creado"))
            .catch((err)=> setErr(err.message))
        }else{
            alert("ingresa la información")
        }
        
    }
    /* Evento para capturar el input de ingreso */
    const onChangeLogIn =(evt)=>{
        setLogUser({
            ...logUser, [evt.target.name]: evt.target.value
        })
    }
    /* submit de  log in - valida el email y pass*/
    const onSubmitLogIn = (evt)=>{
        evt.preventDefault()
        if(logUser.email !== "" && logUser.password !== ""){
            signInWithEmailAndPassword(auth, createUser?.email, createUser?.password) 
            .then((userCredential)=> console.log(userCredential))
            .catch((err)=> setErr(err.message))
        }else{
            alert("ingresa la información")
        }
        
    }         
    /* chequea si hubo un cambio en el status del log */
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsAuth(true)
            setUser(user)
            console.log(user);
            
        }else{
            setIsAuth(false)
        }
    })

    /* evento Log out */
    const logOut =()=>{
        signOut(auth)
        .then(()=> alert("Adiós " + user?.email))
    }

    return(
        <AuthContext.Provider value={{onChangeSignUp, onSubmitSignUp, 
                                    onChangeLogIn, onSubmitLogIn, err, 
                                     isAuth, onAuthStateChanged, user, logOut}}> {/* se deben indicar todas las funciones y varibales que deseamos compartir */}
            {children}    
        </AuthContext.Provider>
        )        
}

/* Custom Hooks para que sea más prolijo el código (siempre se usa useNombre) */

export function useOnChangeSignUp(){
    return useContext(AuthContext).onChangeSignUp
}

export function useOnChangeLogIn(){
    return useContext(AuthContext).onChangeLogIn
}

export function useOnSubmitSignUp(){
    return useContext(AuthContext).onSubmitSignUp
}

export function useOnSubmitLogIn(){
    return useContext(AuthContext).onSubmitLogIn
}
export function useErr(){
    return useContext(AuthContext).err
}
export function useOnAuthStateChanged(){
    return useContext(AuthContext).onAuthStateChanged
}
export function useIsAuth(){
    return useContext(AuthContext).isAuth
}

export function useDataUser(){
    return useContext(AuthContext).user
}
export function useLogOut(){
    return useContext(AuthContext).logOut
}

export default AuthProvider

