import React from 'react';
import styles from '../../style/sidebar.module.css';

function Sidebar (props) {
    const list =  (props) => {
        return "Pages";
    };
    const social = <a href="#">Connect</a>;
    return (
        <div className={styles['side-bar-container']}>
            <div className={styles['background']} />
            <div className={styles['top']}> TOP </div>
            <div className={styles['navigation']}>
                <div className={styles['arrow']} />
                <div className={styles['list']}>
                    {list()}
                </div>
            </div>
            <div className={styles['social']}>
                {social}
            </div>

        </div>
    );
}

export default Sidebar;