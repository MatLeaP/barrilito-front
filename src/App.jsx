import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';

const App =() => {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path = '/' element ={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    
      
  );
}

export default App
