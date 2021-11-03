import { Container, Input } from '@mui/material';
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
      <Container maxWidth="md" sx={{ my: 3 }}>
        <Input
          margin="dense"
          fullWidth
          autoFocus
          value={this.state.term}
          onChange={this.onChange}
          autoFocus
          sx={{ backgroundColor: '#eee' }}
        />
      </Container>
    );
  }
}

export default SearchBar;
