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

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
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
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
