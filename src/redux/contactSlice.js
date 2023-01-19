import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'phone',
  initialState: [],
  reducers: {
    addContact: (state, action) => [action.payload, ...state],
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
        //TODO: need to check this func
      );
    },
  },
});

const { actions, reducer } = contactSlice;

export default reducer;
export const { addContact, deleteContact } = actions;
