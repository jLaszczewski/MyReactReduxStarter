import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create new compoent. This compoent should produce some HTML
class App extends Component {
  render() {
      return <div>Hello World!!</div>;
  }
}

//Take this component's generated HTML and put it
//on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));
