import React from 'react';

function BookListPresenter({ bookList }) {
  return <div>{bookList.length > 0 && bookList.map((book, index) => <div key={index}>{book.title}</div>)}</div>;
}

export default BookListPresenter;
