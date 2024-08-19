import React from 'react';
import Navigation from "../../components/Navigation/Navigation";
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <h1 className={styles.title}>Welcome to HomePage</h1>
            {}
        </div>
    );
};

export default HomePage;
