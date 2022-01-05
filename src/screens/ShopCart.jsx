import React, {useState} from "react";
import "./shopCart.css"
import { useCartItem, useDeleteItemCart, useGetUser, useTotalCompra } from "../context/CartProvider";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import Order from "../components/Order/order";

const ShopCart =()=>{
    const cartItem = useCartItem()
    const deleteItemCart = useDeleteItemCart()  
    const totalCompra = useTotalCompra()
    const getUser = useGetUser()

    const [form, getForm] = useState({ nombre: '', email: '' })
    const [goTicket, setGoTicket] = useState(false)

    const fillForm = (e) => {
      const { name, value } = e.target
      getForm({
        ...form, [name]: value,
      })
    }
    const hora = new Date()

    const finishShop = () => {
      getUser(form)
      const db = getFirestore()
      const ref = collection(db, 'ticket')
      const newOrder = {
        buyer: form.email,
        items: cartItem,
        date: hora,
        total: totalCompra,
      }
      addDoc(ref, newOrder)
      setGoTicket(true)      
     }
    
     return (
      <>
        <>
          {!goTicket ? (
            <>
              <h3 className="cart-title">Detalle de tu compra</h3>
              {cartItem.map((item) => (
                <div key={item.pid} className="result">
                  <div className="info-container">
                    <p>Cantidad: {item.count} </p>
                    <p>{item.name}</p>
                    <p> $ {item.price}</p>
                    <button className="B-eliminar" onClick={() => deleteItemCart(item)} >Eliminar</button>
                  </div>
                </div>
              ))}
              {totalCompra > 0 ? (
                <div className="info-container">
                  <p className="info-total">Total compra: $ {totalCompra}</p>                  
                </div>
              ) : (
                <div className="cart-empty">
                  <img src="https://i.gifer.com/7VE.gif" alt="" />
                  <Link to="/">Vamos a los productos</Link>
                </div>
              )}
              <div/>
              <div className="finish-shop">
                <form metod="POST" onSubmit={finishShop}>
                  <p>Completa los datos y finaliza tu compra</p>
                  <input onChange={fillForm} type="name" name="nombre" placeholder="Nombre"/>
                  <input onChange={fillForm} type="email" name="email" placeholder="Email" />
                  <button disabled={cartItem?.length === 0 || form.nombre === '' || form.email === ''}>Finalizar Compra</button>
                </form>
              </div>
            </>
          ) : (
            <>
              <Order />
            </>
          )}
        </>
      </>
    )
}

export default ShopCart