import React from "react";
import Navbar from "../../molecules/Navbar";
import styles from "./index.module.scss";

const Header: React.FC = () => {
    return(
        <header className={styles['header']}>
            <Navbar />
        </header>
    )
}

export default Header