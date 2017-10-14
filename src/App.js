import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <h1>Hello</h1>
      </MuiThemeProvider>
    );
  }
}

export default App;
