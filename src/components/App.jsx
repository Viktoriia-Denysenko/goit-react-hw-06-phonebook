import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Fillter/Fillter';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove,
  filtrate,
  getContacts,
  getFilter,
} from '../redux/contactsReducer';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    getSameName(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : dispatch(add(contact));
  };

  const getSameName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const changeFilter = event => {
    dispatch(filtrate(event.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div
      style={{
        minWidth: '400px',
        display: 'inline-block',
        padding: '10px',
        height: '100vh',
        margin: '0 auto',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
