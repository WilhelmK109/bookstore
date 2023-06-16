import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import '../App.css';
import './BookList.css';
import { fetchBooks } from '../redux/books/booksSlice';
import AddBookButton from './AddBookButton';

export default function BookList() {
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="book-list-container">
      <ul className="books-list d-flex">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </ul>
      <AddBookButton />
    </div>
  );
}
