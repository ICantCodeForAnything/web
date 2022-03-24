import React from 'react';

import Navigation from './components/Navigation';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./components/Home"
import { MariShop } from "./components/MariShop"
import { Mokoko } from "./components/Mokoko"
import { MarketTracker } from "./components/MarketTracker"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Mokoko" element={<Mokoko />}/>
          <Route path="/MariShop" element={<MariShop />}/>
          <Route path="/MarketTracker" element={<MarketTracker />}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;