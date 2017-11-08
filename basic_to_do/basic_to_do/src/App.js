import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      Hello world
      </div>
      </Router>
    );
  }
}

export default App;
