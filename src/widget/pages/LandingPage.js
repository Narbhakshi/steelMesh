import React from 'react';
import style from '../../styles/landingPage.module.css';

export default function LandingPage (props) {
    return (
        <div className={style["opening-page-container"]}>
            <div className={`${style["title"]} pt-5`}>
                <h1>Hold tight, we are building a great experience...</h1>
                <h3>Stay tuned and visit again..</h3>
            </div>
        </div>
    );
}