import React from 'react';
import MovieItem from './movie_item';

const MovieList = (props) => {
  const movieItems = props.movies.map((poster) => {
    return <MovieItem key={poster.id} movie={poster} />
  });

  return (
    <div className="row">
      <div className="flex">
        {movieItems}
      </div>
    </div>
  );
};

export default MovieList;