import React, { Component } from 'react';
import ClassComp from './components/ClassComp';
import logo from './logo.svg';
import router from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>I am starting the mastery challenge!</h1>
        </header>
        {router}
      </div>
    );
  }
}

export default App;
