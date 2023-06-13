import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [
        ...state.books,
        {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.filter((book) => book.id !== action.payload.id),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;