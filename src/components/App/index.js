import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from '../Main';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Reactify
          </h1>
        </header>
        <div className="App-nav">
          <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counters/10">Counters</Link></li>
          <li><Link to="/todo">Todos</Link></li>
          </ol>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
