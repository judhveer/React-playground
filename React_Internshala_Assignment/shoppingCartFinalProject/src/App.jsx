import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from "./components/NotFound";
import './App.css'
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const isItemInCart = cartItems.find((item) => item.id === product.id);
    if(!isItemInCart){
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter( (item) => item.id !== id));
  }

  return ( 
    <>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" end element={<Home handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
