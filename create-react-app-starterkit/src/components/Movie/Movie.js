import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {

  render() {

    const { title, description } = this.props;

    return (
      <div className="movie">
        <p>Title: { title }</p>
        <p>Description: { description }</p>
      </div>
    );
  }
}

Movie.propTypes = {
    title: React.PropTypes.string.isRequired,
};

export default Movie;
