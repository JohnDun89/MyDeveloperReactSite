import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageContainer from './containers/homepage.js';
//  import ReactCSSTransitionGroup from './react/lib/ReactCSSTransitionGroup';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class App extends Component {
  render() {
    return (
     < HomepageContainer />
    )
  }
}

export default App;
