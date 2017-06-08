import React, { Component } from 'react';
import Poster from './Poster';
import Genres from './Genres';
import { Link } from 'react-router-dom';
import style from '../css/Button.css';

class Movies extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false,
      movies: []
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1/api-test/jsonapi/node/movie/')
      .then(response => response.json())
      .then(movies => {
        this.setState({ movies:movies.data, loaded: true })
      })
  } 
  render() {
    if (this.state.loaded) {
      return (
        <div className="Movies">
            <Genres />
          <hr />
          <h1>Movies</h1>
          <ul>
            {this.state.movies.map(movie =>
                <li key={movie.attributes.uuid}>
                  <h3>{movie.attributes.title}</h3>
                  <Poster uuid={movie.attributes.uuid} />
                  <Link className="button" to={`/movies/${movie.attributes.field_slug}`}>View Movie</Link>
                </li>
            )}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="Movies">
        <h1>Movies</h1>
          <ul>
            <li>Loading...</li>
          </ul>
        </div>
      )
    }
    
  }
}

export default Movies;
