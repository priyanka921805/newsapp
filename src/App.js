import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes, 
  Route
 } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          {/* <News pageSize={6} country="in" category="sports"/> */}
          <Routes>
              <Route exact path="/"/><News pageSize={6} country="in" category="general"/>
          </Routes>
          <Routes>
              <Route exact path="/business" /><News pageSize={6} country="in" category="business"/>
          </Routes>
          <Routes>
              <Route exact path="/entertainment" /><News pageSize={6} country="in" category="entertainment"/>
          </Routes>
          <Routes>
              <Route exact path="/health"/><News pageSize={6} country="in" category ="health"/>
          </Routes>
          <Routes>
              <Route exact path="/science"/><News pageSize={6} country="in" category= "science"/>
          </Routes>
          <Routes>
              <Route exact path="/sports"/><News pageSize={6} country="in" category= "sports" />
          </Routes>
          <Routes>
              <Route exact path="/technology" /><News pageSize={6} country="in" category= "technology" />
          </Routes>
       </Router>
      </div>
    )
  }
}

            