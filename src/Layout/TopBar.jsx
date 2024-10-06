import React from 'react';
import Styles from './TopBar.module.css';
import Avatar from '../Images/avatar-icon.png';

const TopBar = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.contentsOne}>
                <div className={Styles.employee}>
                    <h3>Admin</h3>
                </div>
                {/* <div className={Styles.date}>
                    <h5>Today, 12th September</h5>
                </div> */}
            </div>
            <div className={Styles.contentsTwo}>
                <div className={Styles.notification}>
                    <div className={Styles.alert}>
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </div>
                    <div className={Styles.massage}>
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    </div>
                </div>
                <div className={Styles.user}>
                    <div className={Styles.adminName}>
                        <h4>Ahmadh</h4>
                    </div>
                    <img src={Avatar} alt="" />
                </div>    
            </div>
        </div>
    )
};

export default TopBar;
