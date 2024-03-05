import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'

const Cart = () => {

  const cart = useSelector((state) => state.cart)

  return (
    <div>
        <Header/>  
      <h2>Resumen de compra</h2>
      <div>
          {cart.map(c=>(
          <div>
              <ul>
                <li><p>{c.name}  Precio: {c.price}</p></li>
              </ul>            
          </div>
        ))}
      </div>
    </div> 
  )
}

export default Cart
