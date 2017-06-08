//http://127.0.0.1/api-test/jsonapi/node/movie/?filter[field_genre.name][value]=Horror (single genre)
// http://127.0.0.1/api-test/jsonapi/taxonomy_term/genres

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Poster from './Poster';
import style from '../css/Button.css';

class Genre extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    	movies: {},
    	loaded: false
    }
  }
  componentDidMount() {
    const genre = this.props.match.params.genre,
          url = `http://127.0.0.1/api-test/jsonapi/node/movie/?filter[field_genre.name][value]=${genre}`;
    this.setState({
      genre
    });
    fetch(url)
      .then(response => response.json())
      .then(movies => {
        this.setState({ movies:movies.data, loaded: true })
      })
  } 
  render() {
    if (this.state.loaded) {
      let movieList = null;
      if (this.state.movies.length > 0) {
        movieList = this.state.movies.map(movie => {
          return(
              <li key={movie.attributes.uuid}>
                <h3>{movie.attributes.title}</h3>
                <Poster uuid={movie.attributes.uuid} />
                <Link className="button" to={`/movies/${movie.attributes.field_slug}`}>View Movie</Link>
              </li>
          )
        })
      } else {
        movieList = `No ${this.state.genre} movies.`;
      }
      return (
        <div className="Genre">
        <h1>{this.state.genre}</h1>
          {movieList}
        </div>
      );
    } else {
      return (
        <div className="Genre">
            <h1>Loading...</h1>
        </div>
      )
    }
    
  }
}

export default Genre;
