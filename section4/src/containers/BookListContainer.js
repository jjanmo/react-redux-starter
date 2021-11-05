import React, { Component } from 'react';
import BookList from '../components/BookList';
import { connect } from 'react-redux';

class BookListContainer extends Component {
  render() {
    return (
      <div>
        <BookList bookList={this.props.bookList} />
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
