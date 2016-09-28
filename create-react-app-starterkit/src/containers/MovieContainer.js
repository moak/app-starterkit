import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Movie from '../components/Movie/Movie';
import AddMovie from '../components/AddMovie/AddMovie';
import { addMovie, deleteMovie } from '../actions/index';

class MovieContainer extends Component {

  handleDeleteMovie(e, title) {
    e.preventDefault();
    this.props.deleteMovie(title);
  }

  renderList() {
    return this.props.movies.map((movie, i) => {
      return (
        <tr key={i}>
          <td><Movie title={movie.title} description={movie.description} /></td>
          <td><a href="" onClick={(event) => this.handleDeleteMovie(event, movie.title)}>x</a></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <AddMovie addMovie={this.props.addMovie} />
        <table>
          <thead>
            <tr>
              <th>Movie</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

MovieContainer.propTypes = {
  addMovie: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     boundAddMovie: (movie) => {
//       dispatch(addMovie(movie));
//     },
//   }
// }



export default connect (mapStateToProps, { addMovie, deleteMovie }) (MovieContainer);
// export default connect (mapStateToProps, { addMovie }) (MovieContainer);
// export default connect (mapStateToProps, mapDispatchToProps) (MovieContainer);
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginFormContainer)
