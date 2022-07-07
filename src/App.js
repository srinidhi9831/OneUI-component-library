
import './App.css';
import './style.css'
import './Pages/Getstarted.css'
// import Documentation from './Pages/Documentation';
import Getstarted from './Pages/GetStarted';
import Home from './Pages/Home';
import {NavigationBar} from './PageComponents/Navigationcomponent';
import { Route, Routes } from "react-router-dom";
import Documentation from './Pages/Documentation';



function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs"  element={<Documentation />} />
          <Route path="/getstarted"  element={<Getstarted />} />
        {/* //  <Route path="/documentation" element={<Documentation />} /> */}
        </Routes>
      </header>
    </div>

  );
}

export default App;
