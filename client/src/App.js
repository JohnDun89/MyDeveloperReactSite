import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageContainer from './containers/homepage.js';
//  import ReactCSSTransitionGroup from './react/lib/ReactCSSTransitionGroup';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };




  render() {
    return (
     < HomepageContainer />
    
    )
  }
}

export default App;
