import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className='App'>
          <h1>Header</h1>
        </div>
      </BrowserRouter>
    );
  }
}
