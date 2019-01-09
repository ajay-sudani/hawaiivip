import React, { Component } from 'react';
import './App.scss';
import AppRouting from './routing';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class App extends Component {
  render() {
    return (
      <AppRouting></AppRouting>
    );
  }
}

export default App;
