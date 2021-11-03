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
    const { onSearchVideo } = this.props;
    const { value } = e.target;

    this.setState({ term: value });
    onSearchVideo(value);
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
          sx={{ backgroundColor: '#eee' }}
        />
      </Container>
    );
  }
}

export default SearchBar;
