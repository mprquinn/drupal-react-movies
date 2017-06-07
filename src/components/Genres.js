//http://127.0.0.1/api-test/jsonapi/node/movie/?filter[field_genre.name][value]=Horror (single genre)
// http://127.0.0.1/api-test/jsonapi/taxonomy_term/genres

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../css/Button.css';

class Genres extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    	genres: {},
    	loaded: false
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1/api-test/jsonapi/taxonomy_term/genres')
      .then(response => response.json())
      .then(genres => {
        this.setState({ genres:genres.data, loaded: true })
      })
  } 
  render() {
    if (this.state.loaded) {
      return (
        <div className="Genres">
        <h1>Genres</h1>
          <ul>
            {
            	this.state.genres.map(genre => 
            		<li key={genre.attributes.uuid}>
            		 <Link className="button" to={`/movies/genres/${genre.attributes.name}`}>{genre.attributes.name}</Link>
            		</li>
            	)
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div className="Genres">
        <h1>Genres</h1>
          <ul>
            <li>Loading...</li>
            <li>
			  <a href="#" className="button">Genre</a>
            </li>
          </ul>
        </div>
      )
    }
    
  }
}

export default Genres;
