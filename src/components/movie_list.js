import React from 'react';
import MovieItem from './movie_item';

const MovieList = (props) => {
  const movieItems = props.movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />
  });

  return (
    <div className="row">
      <div className="movie-list flex">
        {movieItems}
      </div>
    </div>
  );
};

export default MovieList;