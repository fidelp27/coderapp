import React from 'react'
import './mensaje.css'

const Mensaje = ({ ord }) => {

  return (
    <div className="msg-container">
      {ord.items.map((i) => (
        <ul key={i.pid}>
          <li>
            <h3> {i.name}</h3>
            <h4>Cantidad: {i.count}</h4>
            <h4>Precio: ${i.price}</h4>
          </li>
        </ul>
      ))}
      <h3>Total: ${ord.total}</h3>
      <p>Id de la compra: {ord.id}</p>
      <p>Fecha: {ord.date}</p>
      <p>Email: {ord.buyer}</p>
    </div>
  )
}

export default Mensaje