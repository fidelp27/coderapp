import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartProvider"
import Mensaje from '../Mensaje/Mensaje'
import {getFirestore,collection,getDocs,orderBy,query} from 'firebase/firestore'
import './order.css'

const Order = () => {
  const [order, setOrder] = useState([])
  const { userEmail } = useContext(CartContext)
  const { email } = userEmail

  useEffect(() => {
    const db = getFirestore()
    const ref = query(collection(db, 'ticket'), orderBy('date'))
    getDocs(ref).then((snapshot) => {
      const orden = snapshot.docs.map((doc) => {
        const data = doc.data()
        const { date } = data
        const fecha = new Date(date.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat('es-Es', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(fecha)
        return {
          id: doc.id,
          ...data,
          date: normalizedCreatedAt,
        }
      })
      setOrder(orden.filter((b) => b.buyer === email))
    })
  }, [email])
  
  return (
    <div className="order-container">
      {order?.lenght === 0 ? (
        <img src="https://i.imgur.com/JUfhIPA.gif" alt="img" />
      ) : (
        <div className='order-data'>
          <div className='order-title'>
            <h2>Historial de ordenes</h2>
          </div>
          <div className='orders'>
            <span>{order.map((ord) => (
              <Mensaje key={ord.id} ord={ord} />
            ))}</span>
          </div>
        </div>
      )}
      <Link to="/">Inicio</Link>
    </div>
  )
}

export default Order
