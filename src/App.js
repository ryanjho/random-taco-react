import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Taco from './Components/Taco';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="taco">
        <h1>Random Taco React</h1>
        <Taco />
      </div>
    );
  }
}

export default App;