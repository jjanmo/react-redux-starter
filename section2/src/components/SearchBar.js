import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(this.state.term);
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onChange} autoFocus />
      </div>
    );
  }
}

export default SearchBar;
