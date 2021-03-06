import React, { Component } from 'react';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Genres from './components/Genres';
import Genre from './components/Genre';
import Home from './Home';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="header">
            <h1>Mike's Dumb Drupal React Thing</h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/movies/genres">Genres</Link></li>
          </ul>

          <hr/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/movies/genres/:genre" component={Genre}/>
              <Route path="/movies/genres" component={Genres}/>
              <Route path="/movies/:slug" component={Movie}/>
              <Route path="/movies" component={Movies}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
