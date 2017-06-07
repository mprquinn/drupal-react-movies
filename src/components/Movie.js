import React, { Component } from 'react';
import Poster from './Poster';
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false,
      movie: {}
    }
  }
  componentDidMount() {
    const url = `http://127.0.0.1/api-test/jsonapi/node/movie/?filter[field_slug][value]=${this.props.match.params.slug}`;

    fetch(url)
      .then(response => response.json())
      .then(movie => {
        console.log(movie.data[0])
        this.setState({ movie: movie.data[0], loaded: true })
      });
  } 
  render() {
    if (this.state.loaded) {
      return (
        <div className="Movie">
            <Poster uuid={this.state.movie.attributes.uuid} />
            <h1>{this.state.movie.attributes.title}</h1>
            <p>{this.state.movie.attributes.body.value}</p>
            <Link className="button" to="/movies">Back to Movies</Link>
        </div>
      );
    }
    return (<p>Loading...</p>);
  }
}

export default Movie;
