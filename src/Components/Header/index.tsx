import React from 'react'
import { NavLink } from 'react-router-dom';
import { LogoIcon, UserIcon, CaretDownIcon, NotificationIcon } from '../../assets/svg';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>

            <nav className={styles.nav}>
                <NavLink to="/dashboard" activeClassName={styles.active} className={styles.link}>
                    DASHBOARD
                </NavLink>
                <NavLink to="/customers" activeClassName={styles.active} className={styles.link}>
                    CUSTOMERS
                </NavLink>
                <NavLink to="/associates" activeClassName={styles.active} className={styles.link}>
                    ASSOCIATES
                </NavLink>
                <NavLink to="/request" activeClassName={styles.active} className={styles.link}>
                    REQUESTS
                </NavLink>
                <NavLink to="/schedules" activeClassName={styles.active} className={styles.link}>
                    SCHEDULES
                </NavLink>
                <NavLink to="/payments" activeClassName={styles.active} className={styles.link}>
                    PAYMENTS
                </NavLink>
                <NavLink to="/settings" activeClassName={styles.active} className={styles.link}>
                    SETTINGS
                </NavLink>
            </nav>
            <div className={styles.action}>
                <div className={styles.actionNotify}>
                    <NotificationIcon />
                </div>
                <div className={styles.actionUser}>
                    <UserIcon />
                    <CaretDownIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
