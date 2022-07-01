import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

export const add = createAction('contacts/add');
export const remove = createAction('contacts/remove');
export const filtrate = createAction('filter/filtrate');

// const contactsReducer = createReducer(
//   {
//     contacts: {
//       items: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ],
//       filter: '',
//     },
//   },
//   {
//     [add]: (state, action) => {
//       return {
//         contacts: {
//           items: [action.payload, ...state.contacts.items],
//           filter: state.contacts.filter,
//         },
//       };
//     },
//     [remove]: (state, action) => {
//       return {
//         contacts: {
//           items: state.contacts.items.filter(
//             contact => contact.id !== action.payload
//           ),
//           filter: state.contacts.filter,
//         },
//       };
//     },
//     [filtrate]: (state, action) => {
//       return {
//         contacts: {
//           items: state.contacts.items,
//           filter: action.payload,
//         },
//       };
//     },
//   }
// );

const contactsReducer = createReducer(
  {
    contacts: {
      items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
    },
  },
  {
    [add]: (state, action) => {
      return {
        contacts: {
          items: [action.payload, ...state.contacts.items],
        },
      };
    },
    [remove]: (state, action) => {
      return {
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };
    },
  }
);

const filterReducer = createReducer(
  {
    contacts: {
      filter: '',
    },
  },
  {
    [filtrate]: (state, action) => {
      return {
        contacts: {
          filter: action.payload,
        },
      };
    },
  }
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
