import { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, getContacts } from '../../redux/contactsReducer';
import { nanoid } from 'nanoid';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`${name} is not processed`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const getSameName = name => {
      return contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    };

    getSameName(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : dispatch(add(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>Name </label>
        <input
          className={s.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={s.label}>Number</label>
        <input
          className={s.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.button} type="submit">
          Add contacts
        </button>
      </form>
    </>
  );
}

export default ContactForm;
