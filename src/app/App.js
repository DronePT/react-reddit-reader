import React, { Component } from 'react';
import logo from './../assets/reddit-logo-64.png';
import './App.sass';

import Sidebar from './layout/sidebar/sidebar'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
