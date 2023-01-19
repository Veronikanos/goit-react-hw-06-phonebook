import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'phone',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.contacts.filter(item => item.id !== action.payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
