import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
       <News pageSize={3} country="in"/>
      </div>
    )
  }
}

            // Wrong
            // this.state.comment = 'Hello';

            // Instead, use setState():

            // Correct
            // this.setState({comment: 'Hello'});
