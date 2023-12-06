import React, { useState } from 'react'
import {Pie} from 'react-chartjs-2'
import {UserData} from './Data'
import {Chart as ChartJS } from 'chart.js/auto'

const BarChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
        }]
    });

    return (
        <div>
            <Pie data={userData} />
        </div>
    )
}

export default BarChart