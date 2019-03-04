import React, { Component } from 'react';

class MainView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render () {
        return (
        <div>
            <header className="App-header">
                <h3>Welcome</h3>
            </header>
            <h1> Hello internally</h1>
        </div>);
    }
}

export default MainView;