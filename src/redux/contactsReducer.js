import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'items',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    add: (state, { payload }) => [payload, ...state],
    remove: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtrate: (_, { payload }) => payload,
  },
});

const persistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const { add, remove } = contactsSlice.actions;
export const { filtrate } = filterSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
