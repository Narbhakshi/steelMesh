import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

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
            <Header />
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