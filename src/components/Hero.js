import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/investments');
    }
    return (
        <div >
            <img src="https://images.unsplash.com/photo-1559123692-5dcad32dc316?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" className='w-full h-full object-cover'/>
            <div className=' m-auto'>
                <div className='absolute top-[36%] w-full flex flex-col items-center text-white px-4 text-center'>
                    <h1 className='font-bold text-6xl'> NOLA INVESTS </h1>
                    <p className='text-2xl text-white my-4 px-20 p-4'>This app is your money-saving bestie. It's got your back with a student-friendly approach to money management.
It'll equip you with a simulated budget and diverse tools for money management. You'll be slaying that budget with smarter and more informed financial decisions in no time.</p>
                    <button onClick={handleButtonClick} className='px-6 py-4 rounded-lg transition-all hover:bg-[#5aa15e] focus:outline-none focus:ring-2 focus:ring-[#78BE20] focus:ring-opacity-50'> Start Investing </button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Hero