import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import LandingPage from '../pages/LandingPage';
import Page1 from '../pages/Page1';
import Contact from '../pages/Contact';

class MainView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render () {
        return (
        <div className="main-view-container">
            {/* <Header /> */}
            <LandingPage />
            <Page1 />
            <Contact />
            <div className="App-header">
                <h3>You have come to the right place</h3>
                {this.props.msg.defaultMessage}
            </div>
            <div className="length">
            </div>
            <Sidebar />
            <Footer />
        </div>);
    }
}

export default MainView;