import React, { Component } from 'react';
import ComingBox from "./ComingBox";
import Header from "./Header";
import ComingForm from "./ComingForm";
import '../styles/Content.css';

class Content extends Component {

  render() {
    return (
        <div>
          <Header/>
          <div className="content">
            <ComingForm/>
            <ComingBox/>
          </div>
        </div>
    );
  }
}

export default Content;
