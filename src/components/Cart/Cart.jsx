import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'

const Cart = () => {

  const cart = useSelector((state) => state.cart)

  return (
    <div>
      <Header/>
    {cart.map(c=>(
      <div>
      <h3>{c.name}</h3>
      <p>Precio: {c.price}</p>
      <img src= {c.img} alt="" />
      {/* Otros detalles del producto */}
    </div>
    ))}
    </div>
  )
}

export default Cart
