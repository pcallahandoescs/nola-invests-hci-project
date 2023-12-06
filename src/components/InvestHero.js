import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvestHero = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    return (
        <div className='relative w-full h-screen'>
            <img src="https://images.unsplash.com/photo-1559123692-5dcad32dc316?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" className='w-full h-full object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 text-center'>
                
                <h2 className='text-white text-3xl'> {/* {budget-amount >= $1000 ? <h2> Youre remaining budget this month, after covering necessities, is ...</h2> : <h2> Looks like you still have ... to invest </h2> } */} Your remaining budget this month, after covering necessities, is...</h2>
                <div className="p-4 m-4 max-w-sm mx-auto bg-white rounded-lg border border-white-200 shadow-md dark:bg-gray-800 dark:border-white-700">
                    <p className='budget-amount text-white text-7xl'>$1000</p>
                </div>
                
                <div className='flex flex-wrap justify-center gap-4 mt-4 py-5 '>
                    <div>
                        <button className='m-5' onClick={() => navigateTo('/investments/going-out')}>Going Out</button>
                        <button className='m-5' onClick={() => navigateTo('/invest-etfs')}>Investing in ETFs</button>
                        <button className='m-5' onClick={() => navigateTo('/invest-stocks')}>Investing in Stocks</button>
                    </div>
                    <div>
                        <button className='m-5' onClick={() => navigateTo('/savings-account')}>High-Yield Savings Account</button>
                        <button className='m-5' onClick={() => navigateTo('/invest-crypto')}>Investing in Crypto/NFTs</button>
                        <button className='m-5' onClick={() => navigateTo('/invest-bonds')}>Investing in Bonds</button>
                    </div>
                </div>
                <div>
                    <button className='reset-budget center m-5 px-8 py-8 bg-gradient-to-r from-[orange] to-[red]' onClick={() => navigateTo('/')}>Reset Budget</button>
                    <button className='reset-budget center m-5 px-8 py-8 bg-gradient-to-r from-[yellow] to-[orange]' onClick={() => navigateTo('/investments/conclusion')}>Conclusion</button>
                </div>
                
            </div>
        </div>
    )
}

export default InvestHero;
