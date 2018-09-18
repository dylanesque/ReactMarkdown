import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Here is my placeholder value'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Text was submitted to be previewed ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">

        <div className="heading">
          <h1>This is my Markdown previewer!</h1>
        </div>

        <div>
      <h2>Enter some markdown to double-check your output!</h2>

      <form onSubmit={ this.handleSubmit }>
      <textarea
        value={this.state.value}
        onChange={this.handleChange}
        id="editor"
        rows="10"
        cols="80" />
        <br/>
        <input type="submit" value="Submit" />
        </form>
      </div>

      <div id="preview">{ this.state.value }</div>

      </div>
    );
  }
}

export default App;
