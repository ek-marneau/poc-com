import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Content/>
      </MuiThemeProvider>
    );
  }
}

export default App;
