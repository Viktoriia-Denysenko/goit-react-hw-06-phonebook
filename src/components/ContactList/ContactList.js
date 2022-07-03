import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contactsReducer';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={s.contactsList}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
