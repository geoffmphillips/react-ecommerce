import React, { Component } from 'react';
import './App.css';

const buttonStyle = {
  border: "0",
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <p>test</p>
          <button type="button" className="btn btn-outline-light">Sign Up</button>
          <button type="button" className="btn btn-outline-light" style={buttonStyle}>Log In</button>
        </div>
      </div>
    );
  }
}

export default App;
