import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Movie from '../components/Movie/Movie';
import AddMovie from '../components/AddMovie/AddMovie';
class ListMovies extends Component {

  renderList() {
    return this.props.movies.map((movie, i) => {
      console.log('move => ' , i);
      return (
          <li key={i}><Movie title={movie.title} description={movie.description} /></li>
      )

    })
  }
  render() {
    return (
      <div>
        <AddMovie />
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state in mapStateToProps', state);
  return {
    movies: state.movies
  }
}

export default connect (mapStateToProps) (ListMovies);



// const mapDispatchToProps = (dispatch) => {
//   return {
//     boundLogin: (username, password) => {
//       dispatch(login(username, password));
//     },
//     boundLogout: (username) => {
//       dispatch(logout(username));
//     },
//     boundReset: () => {
//       dispatch(loginReset());
//     },
//     boundVerify: (code, username) => {
//       dispatch(verify(code, username));
//     },
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginFormContainer)
