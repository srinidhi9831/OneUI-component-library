//import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useCart } from './Context/cart-context';
import Documentation from './PageMain/Documentation';
import Home from './PageMain/Home';
import Navigation from './pages/Navigation';
function App() {
  const {stylediv}=useCart();

  return (
    <div className="App">
       <div className={stylediv}>
          <Navigation />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
