import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
import tulaneIcon from './Icons/logo.svg'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2 bg-[#336666]'>
            <div className='flex items-center'>
                <img src={tulaneIcon} className='text-[var(--primary-dark)] mr-2'/>
                
                <h1 className='text-xl font-bold text-white px-4'>NOLA INVESTS</h1>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className='hidden md:flex items-center px-6'>
                {/* <AiFillPhone size={20} className='nr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-white'>1-800-538-9980</p> */}
            </div>
            <button>Contact Us</button>
        </div>
    )
}

export default TopBar