import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.sass';

import Sidebar from './layout/sidebar/sidebar'
import SubReddits from './components/sub-reddits/sub-reddits'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <div className="app-content">
          <Switch>
            <Route path="/favorites" exact={true} component={SubReddits} />
            <Route path="/favorites/:subreddit" exact={true} component={SubReddits} />
            <Route path="/:value" render={
              (props) => (
                <div className="page-not-found">
                  <h1>404 not found! [{props.match.url }]</h1>
                </div>
              )
            } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
