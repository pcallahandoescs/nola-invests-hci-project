import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const PieChart = ({ investments }) => {
    let investmentData;

    if (investments) {
        investmentData = {
            labels: Object.keys(investments),
            datasets: [{
                label: "Investment Distribution",
                data: Object.values(investments),
                backgroundColor: [
                    'red', 'blue', 'yellow', 'green', 'purple', 'orange'
                ],
                hoverOffset: 4
            }]
        };
    } else {
        investmentData = {
            labels: [],
            datasets: [{
                label: "Investment Distribution",
                data: [],
                backgroundColor: [],
                hoverOffset: 4
            }]
        };
    }

    return (
        <div>
            <Pie data={investmentData} />
        </div>
    );
};

export default PieChart;
