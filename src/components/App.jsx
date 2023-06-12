import React, { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  static defaultProps = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: 3</p>
          <p>Neutral: 2</p>
          <p>Bad: 2</p>
        </div>
      </div>
    );
  }
}
