import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListPresenter from './presenter';
import * as bookActions from '../../store/modules/book';

class BookListContainer extends Component {
  render() {
    return (
      <div>
        <BookListPresenter bookList={this.props.list} selectBook={this.props.selectBook} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.book.list,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    selectBook: (id) => dispatch(bookActions.selectBook(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
