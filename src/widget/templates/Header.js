import React, { Component} from 'react';
import styles from '../../style/header.module.css';

class Header extends Component {

    render () {
        return (
            <nav className={styles["nav-local"]}>
                <div className={styles["nav-wrapper"]}>
                    <div className={styles["background"]}>
                    </div>
                    <div className={styles["content"]}>
                        <div className={styles["title"]}>
                            <span className={styles["nav-logo"]}>LOGO</span>
                        </div>
                        <div className={styles["menu"]}>
                        <a href="#" className="menucta-anchor" id="menucta-contact">
								<span className="menucta-label ">Contact</span>
							</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;