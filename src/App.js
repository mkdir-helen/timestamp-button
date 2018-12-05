import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './UnorderedList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What time is it?</h1>
        <Main />
      </div>
    );
  }
}

export default App;
