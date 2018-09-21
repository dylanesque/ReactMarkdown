import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Here is my placeholder value'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">

        <div className="heading">
          <h1>This is my Markdown previewer!</h1>
        </div>

        <div>
      <h2>Enter some markdown to double-check your output!</h2>

      <form>
      <textarea
        value={this.state.value}
        onChange={this.handleChange}
        id="editor"
        rows="10"
        cols="86" />
        </form>
      </div>

      <div id="preview">{ this.state.value }</div>

      </div>
    );
  }
}

const placeholderText = `
  # How It Works:
  ## Enter some Markdown in this box, and see the output rendered below.

  > Don't know what Markdown is? No problem! It's a templating language
  > designed to quickly draft HTML! 

  For a syntax refresher, visit https://guides.github.com/features/mastering-markdown/



  `

export default App;
