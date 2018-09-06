import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
      <h2>Enter some markdown to double-check your output!</h2>
      <input type="textarea" id="editor"></input>
      </div>
    );
  }
};

export default TextInput;