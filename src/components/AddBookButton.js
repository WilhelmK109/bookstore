import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook, createBook } from '../redux/books/booksSlice';

export default function AddBookButton() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (event) => {
    event.preventDefault();
    if (title && author) {
      const book = {
        item_id: nanoid(),
        title,
        author,
        category: null,
      };
      dispatch(createBook(book))
        .then(() => {
          dispatch(addBook(book));
          setTitle('');
          setAuthor('');
        });
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleAddBook}>
        <input className="input-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input className="input-author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button className="add-button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
