import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';

const App =() => {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path = '/' element ={<Home />} />
          <Route path= '/product/:id' element= {<ProductDetail />} />
          <Route path= 'cart' element={<Cart/>} />
<<<<<<< HEAD
          <Route path= 'register' element = {<Register/>} />
=======
          <Route path= 'register' element={<Register/>} />
>>>>>>> c644ad745c0429bcd80187e14d82e7ef7722d25a
        </Routes>
      </div>
    </BrowserRouter>
    
      
  );
}

export default App
