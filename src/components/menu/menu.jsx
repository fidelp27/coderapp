import React from "react"
import "./menu.css"
import { NavLink } from "react-router-dom"


function Menu(){

  const categories = [
    {id:"1", address: '/nosotros', text: 'Nosotros'},
    {id:"2", address: '/category/Developer', text: 'Programación'},
    {id:"3", address: '/category/Gamer', text: 'Gamer'},
    {id:"4", address: '/category/Series', text: 'Series'},
    {id:"5", address: '/category/Movies', text: 'Películas'},
    {id:"6", address: '/category/Crypto', text: 'Crypto'},
    {id:"7", address: '/contact', text: 'Contacto'},
  ]

  return(
      <nav className="nav">
          {categories.map((item)=>{
              return(
                <div className="link" key={item.id}>
                  <NavLink to={item.address} className={({isActive})=> (isActive ? 'activeClass' : '')}> {item.text} </NavLink>
                </div>            
              )
          })}
      </nav>
  )
}
export default Menu