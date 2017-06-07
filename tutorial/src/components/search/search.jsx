import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  constructor (props) {
    super(props); // parent::constructor(props)

    this.state = {
      searchFieldValue: ''
    };

    this.searchFieldChange = this.searchFieldChange.bind(this);
  }

  searchFieldChange (event) {
    this.setState({
      searchFieldValue: event.target.value
    });

    this.props.searchValueEntered(event.target.value);
  }

  render () {
    return (
      <div className="mb-3">
        <label>
          Search:
          <input
            className="ml-2"
            type="search"
            autoComplete="off"
            onChange={this.searchFieldChange}
            value={this.state.searchFieldValue}
          />
        </label>
        <p>You searched for: <span>{this.state.searchFieldValue}</span></p>
      </div>
    );
  }
}

Search.propTypes = {
  searchValueEntered: PropTypes.func.isRequired
};

export default Search;
