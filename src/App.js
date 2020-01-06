import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className='App'>
          {/* Switch makes sure only one route is loaded up at a time */}
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
