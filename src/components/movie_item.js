import React from 'react';

const MovieItem = (props) => {
  const {id, title, release_date, vote_average, poster_path} = props.movie;
  const release_year = (new Date(`${release_date}`)).getFullYear();

  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
      <div className="movie-item">
        <h2 className="movie-title text-center"><a href={`https://www.themoviedb.org/movie/${id}?language=en-US`} target="_blank">{title} ({release_year})</a></h2>
        <p className="movie-rating">Rating: {vote_average.toFixed(1)}</p>
        <div className="movie-poster">
          <a href={`https://www.themoviedb.org/movie/${id}?language=en-US`} target="_blank">
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} className="img-responsive center-block" alt="poster"/>
          </a>
        </div>
      </div>
    </div>
  )
};

export default MovieItem;