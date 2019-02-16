import React, { Component } from 'react';
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Header />
              <Home />
            </div>
          )}/>

          <Route exact={true} path='/projects' render={() => (
            <div className="App">
              <Header />
              <Projects />
            </div>
          )}/>

          <Route exact={true} path='/contact' render={() => (
            <div className="App">
              <Header />
              <Contact />
            </div>
          )}/>

        </div>
      </Router>
    );
  }
}

export default App;
