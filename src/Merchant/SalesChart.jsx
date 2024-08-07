import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SalesChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Sales',
                data: [3000, 4500, 3500, 5000, 7000, 6000, 8000, 7500, 9000, 8500, 10000, 9500],
                fill: true,
                backgroundColor: '#FFCC08',
                borderColor: '#FFCC08',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
        },
        elements: {
            line: {
                borderWidth: 2,
            },
        },
    };

    return (
        <div className="w-full py-4 bg-white rounded-md mb-4 h-[400px]">
            <Line data={data} options={options} />
        </div>

    );
};

export default SalesChart;
