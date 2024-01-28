import React, { useEffect } from 'react'
import Header from '../Header/Header'
import ProductCard from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Redux/Actions/Actions';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts)
  const navigate = useNavigate();

  const handleBuyCLick = ( product) => {
    navigate("/product/" + product.id_product, { state: { product }});
  };

    useEffect(() =>{
        dispatch(getAllProducts())
        console.log(allProducts)
    }, [dispatch]);

  return (
    <div>
      <Header/>
      <div>
      </div>
      {allProducts.map(product=>(        
      <Button key={product.id_product} onClick={() => handleBuyCLick(product)}>            
      <ProductCard
        idproduct={product.id_product}
        productImg={product.img}
        productName={product.name}
        description={product.description.slice(0, 80)}
        productPrice={product.price}
        />
      </Button>
      ))}      
    </div>
  )
}

export default Home
