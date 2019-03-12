import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propsProvider from './PropsProvider';
import '../styles/App.css';
import MainView from './templates/MainView';

class App extends Component {

  constructor(props) {
    super(props);
    this.propsProvider = new propsProvider(this.context);
}

  static get contextTypes() {
    return {
        policy: PropTypes.func
    };
}

  render() {
    return (
      <div className="App">
        <MainView {...this.propsProvider.getComponentProps(this.props)} />
      </div>
    );
  }
}

export default App;
