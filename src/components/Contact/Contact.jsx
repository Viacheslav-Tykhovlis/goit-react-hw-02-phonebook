import React from 'react';
import css from './Contact.module.css';

export const Contact = ({ contactList }) => {
  return contactList.map(contact => {
    return (
      <li key={contact.id} className={css.contactItem}>
        <p className={css.name}>{contact.name}</p>
        <span className={css.number}>{contact.number}</span>
      </li>
    );
  });
};
