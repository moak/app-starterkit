export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    title: movie.title,
    description: movie.description
  }
}
