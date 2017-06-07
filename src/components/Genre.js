//http://127.0.0.1/api-test/jsonapi/node/movie/?filter[field_genre.name][value]=Horror (single genre)
// http://127.0.0.1/api-test/jsonapi/taxonomy_term/genres

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../css/Button.css';

class Genre extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    	genre: {},
    	loaded: false
    }
  }
  componentDidMount() {
    // fetch('http://127.0.0.1/api-test/jsonapi/taxonomy_term/genres')
    //   .then(response => response.json())
    //   .then(genres => {
    //     this.setState({ genres:genres.data, loaded: true })
    //   })
  } 
  render() {
    if (this.state.loaded) {
      return (
        <div className="Genre">
        <h1>Genre</h1>
          
        </div>
      );
    } else {
      return (
        <div className="Genre">
        <h1>Genre</h1>
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

export default Genre;
