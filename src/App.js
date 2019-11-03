import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Counter from './components/Counter';
import Series from  './containers/Series';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TV Series List
          </h1>
        </header>
        {<Intro message="I love TV! And something a bit longer."/>}
        <Series />
        <Counter interval={1000} step={1}/>
        <Counter interval={2000} step={5}/>
      </div>
    );
  }
}

export default App;
