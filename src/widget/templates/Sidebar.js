import React from 'react';
import styles from '../../styles/sidebar.module.css';

function Sidebar (props) {
    const list =  (props) => {
        return (
            <div>
                <div className="introduction">
                        <i className="material-icons">
                            home
                        </i>
                </div>
                <div className="page2">f</div>
                <div className="contact">f</div>
            </div>
        );
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