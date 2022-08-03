//import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Documentation from './pages/Documentation';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
function App() {
const [style,setStyle]=useState("container m-auto p-2")
  return (
    <div className="App">
       <div className={style}>
          <Navigation set={setStyle}/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
