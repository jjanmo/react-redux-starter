import React from 'react';

const styles = {
  searchBar: {
    width: '70%',
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
  },
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  render() {
    return (
      <div style={styles.searchBar}>
        <input
          style={styles.input}
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBar;
