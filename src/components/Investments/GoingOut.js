import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Topbar';
import NavBar from '../NavBar';

const GoingOut = () => {
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the submission logic here
        // For example, you could update the state or send data to an API
        console.log(`Allocated amount for going out: ${amount}`);
    };

    return (
        <div className='going-out-page'>
            <TopBar />
            <NavBar />
            <br />
            <br />
            <br />
            <h1>Going Out</h1>
            <p>It's okay to allocate funds for fun activities, but being responsible about spending is key. While it's essential to enjoy social activities, consider the opportunity cost of every dollar spent, as it could be directed towards savings or other financial goals. Consider cost-effective alternatives for socializing and maintain a balance between enjoying college life and building a foundation for your financial future. Developing responsible financial habits during college sets the stage for long-term financial well-being.</p>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="spend-amount">
                    How much would you like to spend on going out?
                </label>
                <input
                    id="spend-amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <button onClick={() => navigate('/investments')}>Back to Investments</button>
        </div>
    );
};

export default GoingOut;
