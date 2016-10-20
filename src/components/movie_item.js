import React from 'react';

const MovieItem = (props) => {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w300/';

  return (
    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
      <img src={`${POSTER_URL}${props.movie.poster_path}`} className="img-responsive center-block" alt="poster"/>
      <p className="movie-title text-center">{props.movie.original_title}</p>
    </div>
  )
};

export default MovieItem;