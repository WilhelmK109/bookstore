import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const handleRemove = (bookId) => {
    dispatch(deleteBook(bookId))
      .then(dispatch(removeBook(bookId)));
  };

  return (
    <li>
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <span className="book-author">{book.author}</span>
        <div className="book-buttons">
          <button type="button">Comment</button>
          <button type="button" onClick={() => handleRemove(book.item_id)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
