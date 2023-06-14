import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { addBook } from '../redux/books/booksSlice';

export default function AddBookButton({ title, author }) {
  const dispatch = useDispatch();

  const handleAddBook = (event) => {
    event.preventDefault();
    const book = {
      id: Math.random().toString(36).substring(7),
      title,
      author,
    };
    dispatch(addBook(book));
  };

  return (
    <button type="submit" onClick={handleAddBook}>ADD BOOK</button>
  );
}

AddBookButton.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};
