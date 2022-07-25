
import './App.css';
import './style.css'
import './Pages/Getstarted.css'
import Getstarted from './Pages/GetStarted';
import Home from './Pages/Home';
import {NavigationBar} from './PageComponents/Navigationcomponent';
import { Route, Routes } from "react-router-dom";
import Documentation from './Pages/Documentation';
import Alertcomponent from './PageComponents/AlertComponent';
import Avatarcomponent from './PageComponents/Avatarcomponent';
import Badgecomponent from './PageComponents/Badgecomponent';
import Buttoncomponent from './PageComponents/Buttoncomponent';
import Cardcomponent from './PageComponents/Cardcomponent';
import Imagecomponent from './PageComponents/Imagecomponent';
import Inputcomponent from './PageComponents/Inputcomponent';




function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs"  element={<Documentation />} />
          <Route path="/getstarted"  element={<Getstarted />} />
          <Route path="/alert"  element={<Alertcomponent />} />
          <Route path="/avatar"  element={<Avatarcomponent />} />
          <Route path="/badge"  element={<Badgecomponent />} />
          <Route path="/button"  element={<Buttoncomponent />} />
          <Route path="/card"  element={<Cardcomponent />} />
          <Route path="/image"  element={<Imagecomponent />} />
          <Route path="/input"  element={<Inputcomponent />} />
        {/* //  <Route path="/documentation" element={<Documentation />} /> */}
        </Routes>
      </header>
    </div>

  );
}

export default App;
