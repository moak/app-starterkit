export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    title: movie.title,
    description: movie.description,
  }
}

export function deleteMovie(title) {
  return {
    type: 'DELETE_MOVIE',
    title: title,
  }
}
