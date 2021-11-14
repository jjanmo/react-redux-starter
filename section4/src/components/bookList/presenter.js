import React from 'react';
import './bookList.css';

function BookListPresenter({ bookList }) {
  const Item = ({ title, author, publisher, release, image }) => {
    return (
      <div className="item">
        <img src={image} alt={'book'} />
        <div className="details">
          <div>{title}</div>
          <div>
            {author} | {publisher}
          </div>
          <div>{release}</div>
        </div>
      </div>
    );
  };

  return <div>{bookList.length > 0 && bookList.map((book, index) => <Item key={index} {...book} />)}</div>;
}

export default BookListPresenter;
