import React from 'react';
import Styles from './DoughnutChart.module.css';
import { Doughnut } from 'react-chartjs-2';
import { 
    Chart as ChartJS, // Imports the main Chart component from Chart.js and renames it to ChartJS.
    Tooltip, // Provides tooltips that show additional information when hovering over data points.
    Legend, // Adds a legend to the chart for identifying datasets or categories. 
    ArcElement //Adds support for drawing arc-shaped elements like those used in pie charts and doughnut charts.
} from 'chart.js';

ChartJS.register (
    ArcElement,
    Tooltip,
    Legend,
    // Add any other necessary Chart.js plugins here
);

const data = {
    labels: ['New Books', 'Issued Books', 'Returned Books', 'Lost Books'],
    data: [
        {
            label: '',
            data: [34, 46, 17, 3],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            // borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
            
        }
    ]
};


const DoughnutChart = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 99,
        plugins: {
            legend: {
                position: 'bottom',
            },
        }
    };
    
  return (
    <div className={Styles.container}>
      <Doughnut 
      data={data}
      options={options}
      />
    </div>
  )
}

export default DoughnutChart;
