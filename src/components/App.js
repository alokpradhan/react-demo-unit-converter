import React, { Component } from 'react';
import Form from './Form';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-title">React unit converter</h2>
        </div>

        <div className="App-body container">
          <Form />
        </div>

      </div>
    );
  }
}

export default App;
