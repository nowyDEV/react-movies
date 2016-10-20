import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="search"
          className="form-control"
          onChange={ event => this.onInputChange(event.target.value)}
          placeholder="The Fog" />
      </div>
    );
  }
}

export default SearchBar;

