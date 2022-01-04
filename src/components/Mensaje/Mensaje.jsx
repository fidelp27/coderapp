import React from 'react'
import './mensaje.css'

const Mensaje = ({ ord }) => {
  console.log(ord)

  return (
    <div className="mensaje-box">
      {ord.items.map((i) => (
        <ul key={i.pid}>
          <li>
            <h3>Nombre del Producto: {i.name}</h3>
            <h5>
              Cantidad: {i.count} - Precio: ${i.price}
            </h5>
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