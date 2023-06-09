import React from 'react';
import PropTypes from 'prop-types';

function Book({ bookInfo }) {
  return (
    <li>
      <div className="book-info">
        <p>{bookInfo.title}</p>
        <span>{bookInfo.author}</span>
      </div>
    </li>
  );
}

Book.propTypes = {
  bookInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
