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
                <h3>You have came to the right place</h3>
                {this.props.msg.defaultMessage}
            </header>
        </div>);
    }
}

export default MainView;