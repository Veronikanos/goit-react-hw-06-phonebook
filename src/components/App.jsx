import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleAddContact = newContact => {
    contacts.find(item => item.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const normalizeText = filter.toLowerCase().trim();

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().trim().includes(normalizeText)
  );

  return (
    <section className={styles.phonebook}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>
        {!contacts.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : (
          <>
            <h3>Your phonebook has {contacts.length} contacts</h3>
            <Filter filter={filter} onChange={changeFilter} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
          </>
        )}
      </div>
    </section>
  );
};
