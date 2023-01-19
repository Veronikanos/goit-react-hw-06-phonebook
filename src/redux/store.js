import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './ContactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});
