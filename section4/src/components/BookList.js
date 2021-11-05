import React from 'react';

const BookList = ({ bookList }) => {
  return <div>{bookList.length > 0 && bookList.map((book, index) => <div key={index}>{book.title}</div>)}</div>;
};

export default BookList;
