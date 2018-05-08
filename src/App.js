import React, { Component } from 'react';
import './App.css';
// import Spinkit from './components/Spinkit';
import Text from './components/Text';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Text />
      </div>
    );
  }
}

export default App;
