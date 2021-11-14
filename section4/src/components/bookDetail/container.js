import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookDetailPresenter from './presenter';

class BookDetailContainer extends Component {
  render() {
    return <BookDetailPresenter selectedBook={this.props.selectedBook} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.book,
  };
}

export default connect(mapStateToProps)(BookDetailContainer);
