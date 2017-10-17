import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  state = {
    title: 'ComApp'
  };

  render() {
    return (
        <div>
          <AppBar
          title={this.state.title}></AppBar>
        </div>
    );
  }
}

export default Header;
