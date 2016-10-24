import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/app.css';

import SearchBar from './components/search_bar';
import MovieList from './components/movie_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };

  }

  movieSearch(term) {
    const API_KEY = '08d578993efd398ff6d027e671d7b1a8';
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;

    axios.get(API_URL)
      .then((response) => {
        this.setState({ movies: response.data.results});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const movieSearch = _.debounce((term) => { this.movieSearch(term)}, 400);

    return (
      <div>
        <div className="tmdb-logo"><a href="https://www.themoviedb.org/" target="_blank"></a></div>
        <SearchBar onTermChange={movieSearch} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
