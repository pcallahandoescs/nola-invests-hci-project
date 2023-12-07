import React from 'react'
import NavBar from './NavBar'
import Topbar from './Topbar'
import InvestHero from './InvestHero'

const Investments = ({budget, invest, resetBudget}) => {

    return (
        <div>
            <Topbar />
            <NavBar />
            <InvestHero budget={budget} invest={invest} resetBudget={resetBudget} />
        </div>
    )
}

export default Investments