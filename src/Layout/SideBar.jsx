import React from 'react';
import Styles from './SideBar.module.css';
import logo from '../Images/logo.png';

const SideBar = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.contents}>
            <div className={Styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={Styles.icons}>
                <div className={Styles.dashboardIcon}>
                    <i class="fa fa-tachometer" aria-hidden="true"></i>
                    <h3>Dashboard</h3>
                </div>
                <div className={Styles.usersIcon}>
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <h3>Users</h3>
                </div>
                <div className={Styles.profileIcon}>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h3>Profile</h3>
                </div>
                <div className={Styles.logoutIcon}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    <h3>Logout</h3>
                </div>
                {/* <i class="fa fa-tachometer" aria-hidden="true"></i>
                <h3>Dashboard</h3>
                <i class="fa fa-users" aria-hidden="true"></i>
                <i class="fa-solid fa-users"></i>
                <h3>Users</h3>
                <i class="fa fa-user" aria-hidden="true"></i>
                <h3>Profile</h3>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                <h3>Logout</h3> */}
            </div>
        </div>
    </div>
  )
}

export default SideBar;
