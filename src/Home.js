import React, { Component } from 'react';
import Movies from './components/Movies';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home Page</h1>
        <h2>A React Site Running on a Decoupled Drupal Back-End</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sit, dolor debitis dicta nemo iusto, recusandae iste doloremque atque odit molestiae alias aliquam sed veritatis sint perferendis corporis eum maiores!
        </p>
      </div>
    );
  }
}

export default App;
