import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter as Router } from "react-router-dom"
import reportWebVitals from './Others/reportWebVitals';
//import { PageContext } from './Context/page-context.js';
import { CartProvider } from './Context/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <CartProvider>
     <App/>
     </CartProvider>
    </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
