import React from 'react';
import './bookDetail.css';

function BookDetailPresenter({ selectedBook: book }) {
  // ({ id, title, author, publisher, release, image }
  return book ? (
    <div className="container">
      <div className="infos">
        <img src={book.image.slice(0, book.image.length - 1) + 'M'} alt={'book'} width="180" height="240" />
        <div className="right-infos">
          <div>{book.title}</div>
          <div>{book.author.join(', ')}</div>
          <div>{book.publisher}</div>
          <div>{book.release}</div>
        </div>
      </div>
      <hr />
      <div className="description">{book.description}</div>
      <a href={book.link}>More</a>
    </div>
  ) : (
    <div className="no-select">Select a book to get started 🚀</div>
  );
}

export default BookDetailPresenter;
