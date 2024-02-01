import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

import ttlogonegativ from "../../assets/ttlogonegativ.png";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerTitleContainer}>
                        <img src={ttlogonegativ} className={styles.headerIcon} aria-hidden="true" />
                        <h3 className={styles.headerTitle}>Chat-Bård</h3>
                    </div>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
