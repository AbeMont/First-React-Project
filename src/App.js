import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter ,Link } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>

          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>

          <Route exact={true} path='/projects' render={() => (
            <div className="App">
              <Projects />
            </div>
          )}/>

          <Route exact={true} path='/contact' render={() => (
            <div className="App">
              <Contact />
            </div>
          )}/>

        </div>
      </HashRouter>
    );
  }
}

export default App;
