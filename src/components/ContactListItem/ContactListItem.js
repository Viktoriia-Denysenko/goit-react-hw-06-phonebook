import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsReducer';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  return (
    <li className={s.listItem}>
      <span className={s.itemElement}>{name}:</span>
      <span className={s.itemElement}>{number}</span>
      <button className={s.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
