import React, { Component } from 'react';

class Poster extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false,
      poster: {}
    }
  }
  componentDidMount() {
    const url = `http://127.0.0.1/api-test/jsonapi/node/movie/${this.props.uuid}/field_poster`;
    // console.log(this.props);
    fetch(url)
      .then(response => response.json())
      .then(poster => {
        console.log(poster)
        this.setState({ poster: poster.data.attributes, loaded: true })
      });
  } 
  render() {
    if (this.state.loaded) {
      return (
        <div className="Poster">
          <img src={`http://127.0.0.1${this.state.poster.url}`} alt="Poster for..." />
        </div>
      );
    }
    return (<p>Loading...</p>);
  }
}

export default Poster;
