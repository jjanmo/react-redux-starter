import React, { Component } from 'react';
import BookListPresenter from './presenter';
import { connect } from 'react-redux';

class BookListContainer extends Component {
  render() {
    return (
      <div>
        <BookListPresenter bookList={this.props.bookList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    bookList: state.bookList,
  };
}

export default connect(mapStateToProps)(BookListContainer);
