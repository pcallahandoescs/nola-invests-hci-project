import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Topbar';
import NavBar from '../NavBar';

const HighYieldSavings = ({budget, invest}) => {
    const [amount, setAmount] = useState('');
    const amountInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        amountInputRef.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const amountToInvest = Number(amount);
        if (amountToInvest > 0 && amountToInvest <= budget) {
            invest('Savings', amountToInvest);
            navigate('/investments'); // Redirect after investment
        } else {
            console.log("Invalid investment amount or exceeds budget");
        }
    };

    return (
        <div className='going-out-page'>
            <TopBar />
            <NavBar />
            <img src="https://images.unsplash.com/photo-1559123692-5dcad32dc316?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" className='w-full h-full object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 text-center'>
                <h1 className='text-4xl text-white m-4'>High-Yield Savings</h1>
                <p className='text-white m-2'>Investing in high yield savings accounts offers stability, consistency, and low risk. Fixed interest rates provide reliable returns, making it a prudent choice for those prioritizing security and liquidity. While potential returns may be modest compared to riskier investments like stocks, high yield savings accounts offer a straightforward approach for individuals seeking stability in their financial strategy</p>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="spend-amount" className='text-white m-2 text-1xl'>
                        How much would you like to spend on High-Yield Savings?
                    </label>
                    <input
                        id="spend-amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        ref={amountInputRef}
                    />
                    <button type="submit" className='m-2'>Submit</button>
                </form>

                <button onClick={() => navigate('/investments')}>Back to Investments</button>
                </div>
                
        </div>
    );
};

export default HighYieldSavings;
