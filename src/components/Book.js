import React, { useState } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

export default function Book({ book }) {
  const [progress, setProgress] = useState(65);
  const dispatch = useDispatch();
  const handleRemove = (bookId) => {
    dispatch(deleteBook(bookId))
      .then(dispatch(removeBook(bookId)));
  };

  const handlePercentage = () => {
    let percentage = progress;
    if (percentage < 100) {
      setProgress(percentage += 1);
    }
  };

  return (
    <li>
      <div className="book-info d-flex">
        <h2 className="book-title">{book.title}</h2>
        <span className="book-author">{book.author}</span>
        <div className="book-buttons d-flex">
          <button type="button">Comment</button>
          <button type="button" onClick={() => handleRemove(book.item_id)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="percentage d-flex">
        <CircularProgressbar
          value={progress}
          className="progress-bar"
        />
        <div className="number-percentage">
          <span>
            {progress}
            %
          </span>
          <p>Completed</p>
        </div>
      </div>
      <div className="progress-section d-flex">
        <h2 className="current-chapter">CURRENT CHAPTER</h2>
        <p className="chapter">Chapter 5</p>
        <button
          type="button"
          onClick={handlePercentage}
          className="update-progress"
        >
          UPDATE PROGRESS
        </button>
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
