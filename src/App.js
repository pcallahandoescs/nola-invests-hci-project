import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Investments from './components/Investments';
import GoingOut from './components/Investments/GoingOut';
import Conclusion from './components/Conclusion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/investments' element={<Investments/>} />
            <Route path='/investments/going-out' element={<GoingOut/>} />
          <Route path='/investments/conclusion' element={<Conclusion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
