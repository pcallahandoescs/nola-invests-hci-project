import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Investments from './components/Investments';
import GreenEnergy from './components/Investments/GreenEnergy'
import Conclusion from './components/Conclusion';
import ETFs from './components/Investments/ETFs';
import Stocks from './components/Investments/Stocks';
import Bonds from './components/Investments/Bonds';
import Crypto from './components/Investments/Crypto';
import HighYieldSavings from './components/Investments/HighYieldSavings';

const initialBudget = 1000;

function App() {

  const [budget, setBudget] = useState(initialBudget);
  const [investments, setInvestments] = useState({
    GreenEnergy: 0,
    ETFs: 0,
    Stocks: 0,
    Savings: 0,
    Crypto: 0,
    Bonds: 0
  });

  const invest = (category, amount) => {
    if (budget - amount >= 0) {
      setBudget(budget - amount);
      setInvestments({
        ...investments,
        [category]: investments[category] + amount
      });
    }
  };

  const resetBudget = () => {
    setBudget(initialBudget);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/investments' element={<Investments budget={budget} invest={invest} resetBudget={resetBudget} />}  />
            <Route path='/investments/going-out' element={<GreenEnergy  budget={budget} invest={invest} />}  />
            <Route path='/investments/etfs' element={<ETFs  budget={budget} invest={invest} />}  />
            <Route path='/investments/stocks' element={<Stocks  budget={budget} invest={invest} />}  />
            <Route path='/investments/bonds' element={<Bonds  budget={budget} invest={invest} />}  />
            <Route path='/investments/highyield' element={<HighYieldSavings  budget={budget} invest={invest} />}  />
            <Route path='/investments/crypto' element={<Crypto  budget={budget} invest={invest} />}  />
          <Route path='/investments/conclusion' element={<Conclusion  investments={investments} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
