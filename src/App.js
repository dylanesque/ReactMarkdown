import React, { Component } from 'react';

import TextInput from './TextInput';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TextInput />
      </div>
    );
  }
}

export default App;
