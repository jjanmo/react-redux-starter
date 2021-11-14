import React from 'react';
import './bookList.css';

function BookListPresenter({ bookList, selectBook }) {
  const Item = ({ id, title, author, publisher, release, image }) => {
    return (
      <div className="item" onClick={() => selectBook(id)}>
        <img src={image} alt={'book'} />
        <div className="right-info">
          <div>{title}</div>
          <div>
            {author.join(', ')} | {publisher}
          </div>
          <div>{release}</div>
        </div>
      </div>
    );
  };

  return <div>{bookList.length > 0 && bookList.map((book, index) => <Item key={index} {...book} />)}</div>;
}

export default BookListPresenter;
