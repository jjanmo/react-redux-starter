import React, { Component } from 'react';
import BookListPresenter from './presenter';
import { connect } from 'react-redux';

class BookListContainer extends Component {
  render() {
    return (
      <div>
        <BookListPresenter bookList={this.props.list} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.book.list,
  };
}

export default connect(mapStateToProps)(BookListContainer);
