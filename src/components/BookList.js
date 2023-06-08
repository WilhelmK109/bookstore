import React from 'react';
import Book from './Book';
import './BookList.css';

export default function BookList() {
  return (
    <div>
      <ul className="books-list">
        <Book bookInfo={{ title: 'Book Title 1', author: 'author 1' }} />
        <Book bookInfo={{ title: 'Book Title 2', author: 'author 2' }} />
        <Book bookInfo={{ title: 'Book Title 3', author: 'author 3' }} />
      </ul>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}