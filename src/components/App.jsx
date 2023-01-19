import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import styles from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.phone);
  // console.log(contacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const normalizeText = filter.toLowerCase().trim();

  // const filteredContacts = contacts.filter(item =>
  //   item.name.toLowerCase().trim().includes(normalizeText)
  // );

  return (
    <section className={styles.phonebook}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>
        {/* {!contacts.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : ( */}
        <>
          {/* <h3>Your phonebook has {contacts.length} contacts</h3> */}
          {/* <Filter filter={filter} onChange={changeFilter} /> */}
          <ContactList
          // contacts={filteredContacts}
          // onDelete={deleteContact}
          />
        </>
        {/* )} */}
      </div>
    </section>
  );
};
