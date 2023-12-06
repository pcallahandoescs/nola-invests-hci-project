import React from 'react'
import Hero from './Hero'
import NavBar from './NavBar'
import Topbar from './Topbar'

const Home = () => {
    return (
        <div>
            <Topbar />
            <NavBar />
            <Hero />
        </div>
    )
}

export default Home