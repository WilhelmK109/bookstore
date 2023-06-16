import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SERz0T6MOlfncfi0umcc/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  try {
    const response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    if (!bookId) {
      throw new Error('Invalid book ID');
    }
    const response = await axios.delete(`${url}/${bookId}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== bookId),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const bookList = action.payload;
        const newBookList = [];
        Object.keys(bookList).forEach((book) => newBookList.push({
          item_id: book,
          title: bookList[book][0].title,
          author: bookList[book][0].author,
        }));
        return ({
          ...state,
          books: newBookList,
          status: 'loading',
        });
      })
      .addCase(createBook.pending, (state) => ({ ...state, status: 'loading', error: 'null' }))
      .addCase(createBook.fulfilled, (state, action) => ({ ...state, status: 'succeeded', books: [...state.books, action.payload] }))
      .addCase(createBook.rejected, (state, action) => ({ ...state, status: 'failed', error: action.payload }))
      .addCase(deleteBook.pending, (state) => ({ ...state, status: 'loading', error: 'null' }))
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        return {
          ...state,
          status: 'succeeded',
          books: state.books.filter((book) => book.id !== bookId),
        };
      })
      .addCase(deleteBook.rejected, (state, action) => ({ ...state, status: 'failed', error: action.payload }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
