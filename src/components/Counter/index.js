import React, { Component} from 'react';
import './index.css'

const UP = "up";
const PAUSED = "paused"
const DOWN = "down";

class Counter extends Component {

  state = {
    count: 0,
    timer: null,
    direction: PAUSED,
  }

  increment = () => {
    this.setState({count: this.state.count + this.props.step});
    if (!this.state.timer) {
      const timer = setInterval(this.increment, this.props.interval);
      this.setState({timer: timer, direction: UP});
    }
  }

  decrement = () => {
    this.setState({count: this.state.count - this.props.step});
    if (!this.state.timer) {
      const timer = setInterval(this.decrement, this.props.interval);
      this.setState({timer: timer, direction: DOWN});
    }
  }

  pause = (event) => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({timer: null, direction: PAUSED});
    }
  }

  play = (event) => {
    if (!this.state.timer) {
      Math.random() > 0.5 ? this.increment() : this.decrement();
    }
  }
  
  componentDidMount() {
    this.increment();
  }

  render() {
    return (
      <div>
        <h2 className={this.state.direction}>{this.state.count}</h2>
        <button onClick={this.increment}>Inc</button>
        {this.state.timer !== null && <button onClick={this.pause}>Pause</button>}
        {this.state.timer === null && <button onClick={this.play}>Play</button>}
        <button onClick={this.decrement}>Dec</button>
      </div>
    )
  }
}

export default Counter;