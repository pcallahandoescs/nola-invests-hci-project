import React from 'react'
import BarChart from './BarChart'
import NavBar from './NavBar'
import TopBar from './Topbar'

const Conclusion = () => {
    return (
        <div>
            <div>
                <TopBar />
                <NavBar />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 text-center'>
                    <BarChart />
                </div>
                
            </div>
        </div>
    )
}

export default Conclusion