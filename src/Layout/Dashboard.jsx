import React from 'react';
import Styles from './Dashboard.module.css';
import DashboardHeadText from '../Components/DashboardHeadText/DashboardHeadText';
import ColorCards from '../Components/ColorCards/ColorCards';
// import DoughnutChart from '../Components/DoughnutChart/DoughnutChart.jsx';


const ColorCardsDetailsOne = [
    {
        color: '#4e73df',
        title: 'New Books',
        icon: <i class="fa fa-book" aria-hidden="true"></i>,
    },
    {
        color: '#117504',
        title: 'Borrowed Books',
        icon: <i class="fa fa-users" aria-hidden="true"></i>,
    },
    // {
    //     color: '#f5962a',
    //     title: 'Logged in Users',
    //     icon: <i class="fa fa-users" aria-hidden="true"></i>,
    // }
]

const ColorCardsDetailsTwo = [
    {
        color: '#f52a30',
        title: 'New Users',
        icon: <i class="fa fa-users" aria-hidden="true"></i>,
    },
    {
        color: '#a02af5',
        title: 'Total Users',
        icon: <i class="fa fa-users" aria-hidden="true"></i>,
    },
    // {
    //     color: '#f5962a',
    //     title: 'Logged in Users',
    //     icon: <i class="fa fa-users" aria-hidden="true"></i>,
    // }
]

const Dashboard = () => {
    return (
        <div className={Styles.container}>
            <DashboardHeadText />
            <div className={Styles.cardsContent}>
                <div className={Styles.colorCardsDivOne}>
                    {ColorCardsDetailsOne.map(({color, title, icon}) => (
                        <ColorCards 
                        color={color} 
                        title={title} 
                        icon={icon} 
                        />
                    ))}
                </div>
                <div className={Styles.colorCardsDivTwo}>
                    {ColorCardsDetailsTwo.map(({color, title, icon}) => (
                        <ColorCards 
                        color={color} 
                        title={title} 
                        icon={icon} 
                        />
                    ))}
                </div>
            </div>
            {/* <DoughnutChart /> */}
        </div>
    )
};

export default Dashboard;