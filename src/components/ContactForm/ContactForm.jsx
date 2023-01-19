import styles from './ContactForm.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const state = {
  //   name: setName,
  //   number: setNumber,
  // };

  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.phone);
  // console.log(contacts);

  const handleInput = e => {
    // const { name, value } = e.target;
    // state[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // console.log(e.target.elements.name.value);
    const newObj = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContact(newObj));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input
          className={styles.inputField}
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={name}
          onChange={handleInput}
        />
      </label>

      <label>
        <input
          className={styles.inputField}
          placeholder="Phone number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // value={number}
          onChange={handleInput}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};
