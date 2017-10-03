import React, { Component } from 'react';
import './App.sass';

import Sidebar from './layout/sidebar/sidebar'
import SubReddits from './components/sub-reddits/sub-reddits'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <div className="app-content">
            <SubReddits />
        </div>
      </div>
    );
  }
}

export default App;
