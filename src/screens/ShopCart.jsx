import React, {useState} from "react";
import "./shopCart.css"
import { useCartItem, useDeleteAll, useDeleteItemCart, useGetUser, useTotalCompra } from "../context/CartProvider";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import Order from "../components/Order/order";

const ShopCart =()=>{
    const cartItem = useCartItem()
    const deleteItemCart = useDeleteItemCart()  
    const totalCompra = useTotalCompra()
    const deleteAll = useDeleteAll()
    const getUser = useGetUser()

    const [form, getForm] = useState({ nombre: '', email: '' })
    const [goTicket, setGoTicket] = useState(false)

    const fillForm = (e) => {
      const { name, value } = e.target
      getForm({
        ...form,
        [name]: value,
      })
    }
    const realTime = new Date()

    const finishShop = () => {
      getUser(form)
      const db = getFirestore()
      const ref = collection(db, 'ticket')
      const newOrder = {
        buyer: form.email,
        items: cartItem,
        date: realTime,
        total: totalCompra,
      }
      addDoc(ref, newOrder)
      setGoTicket(true)
      deleteAll()
     }
    
     return (
      <>
        <>
          {!goTicket ? (
            <>
              <h3 className="cart-title">Detalle de tu compra</h3>
              {cartItem.map((item) => (
                <div key={item.pid} className="result">
                  <div className="result-det">
                    <p>
                      {item.count} {item.name} $ {item.price}
                    </p>
                    <button
                      className="B-eliminar"
                      onClick={() => deleteItemCart(item)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
              {totalCompra > 0 ? (
                <>
                  <p className="totalcompra">Total compra: $ {totalCompra}</p>
                  
                </>
              ) : (
                <>
                  <p>No agregaste nada todavía</p>
                  <Link to="/">Inicio</Link>
                </>
              )}
              <div />
              <div className="formuser">
                <form metod="POST" onSubmit={finishShop}>
                  <p>Completá tus datos para finalizar la compra</p>
                  <input
                    onChange={fillForm}
                    type="name"
                    name="nombre"
                    placeholder="Nombre"
                  />
                  <input
                    onChange={fillForm}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <button
                    disabled={
                      cartItem?.length === 0 ||
                      form.nombre === '' ||
                      form.email === ''
                    }
                  >
                    Finalizar Compra
                  </button>
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