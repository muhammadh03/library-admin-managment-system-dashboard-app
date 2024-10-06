import React from 'react';
import Styles from './DashboardHeadText.module.css';

const DashboardHeadText = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.contents}>
          <h1 className={Styles.text}>Dashboard</h1>
          <div className={Styles.dateDiv}>
              <h5 className={Styles.date}>Today, 12th September</h5>
          </div>
        </div>
    </div>
  )
}

export default DashboardHeadText;
