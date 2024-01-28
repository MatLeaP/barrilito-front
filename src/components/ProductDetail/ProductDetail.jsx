import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Actions/Actions';

const ProductDetail = ({ product: propProduct }) =>{
    const location = useLocation();
    const product = location.state?.product || propProduct;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleAddToCart = (product) =>{
      dispatch(addToCart(product));
      console.log(cart)
    }

  return (
    <div>
      <Header/>
      <h2>Detalle del Producto</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>Precio: {product.price}</p>
          <img src= {product.img} alt="" />
          {/* Otros detalles del producto */}
          <div>
            <button onClick={()=> handleAddToCart(product)}  >Buy</button>
          </div>
        </div>
      ) : (
        <p>No se ha proporcionado información sobre el producto.</p>
      )}
    </div>
  )
}

export default ProductDetail
