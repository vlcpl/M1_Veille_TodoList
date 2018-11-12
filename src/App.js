import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoComponent from './Todo/TodoComponent';

class App extends Component {
  render() {
    return (
      <TodoComponent></TodoComponent>
    );
  }
}

export default App;
