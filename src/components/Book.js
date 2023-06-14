import React from 'react';
import PropTypes from 'prop-types';
import RemoveBookButton from './RemoveBookButton';

function Book({ book }) {
  return (
    <li>
      <div className="book-info">
        <p>{book.title}</p>
        <span>{book.author}</span>
      </div>
      < RemoveBookButton bookId={book.id} />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
