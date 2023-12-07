import React from 'react'
import PieChart from './PieChart'
import NavBar from './NavBar'
import TopBar from './Topbar'

const Conclusion = ({ investments }) => {
    return (
        <div>
            <div>
                <TopBar />
                <NavBar />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 text-center bg-green-100'>
                    <PieChart investments={investments} />
                </div>
                
            </div>
        </div>
    )
}

export default Conclusion