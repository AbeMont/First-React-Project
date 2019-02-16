import React, { Component } from 'react';
import Home from './Pages/Home';
import Header from "./Components/Header/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
      </div>
    );
  }
}

export default App;
