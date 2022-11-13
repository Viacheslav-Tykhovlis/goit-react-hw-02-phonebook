import React from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  // userId = nanoid(10);

  getName = evt => {
    this.setState({
      name: evt.target.value,
    });
  };

  getNumber = evt => {
    this.setState({
      number: evt.target.value,
    });
  };

  addContact = evt => {
    evt.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, id: nanoid(10), number: this.state.number },
      ],
    }));
    this.resetName();
  };

  resetName = () => {
    this.setState({ name: '' });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const normalaseFilter = this.state.filter.toLowerCase();

    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaseFilter)
    );

    return (
      <div className={css.mainDiv}>
        <h2>Phonebook</h2>
        <form className={css.formInput} onSubmit={this.addContact}>
          <label className={css.labelName}>
            Name:
            <br />
            <input
              className={css.inputName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.getName}
            />
          </label>
          <label className={css.labelName}>
            Number:
            <br />
            <input
              className={css.inputName}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.getNumber}
            />
          </label>
          <button type="submit" className={css.btnContact}>
            Add contact
          </button>
        </form>

        <h2>Contacts</h2>
        <label>
          Find contact by name <br />
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changeFilter}
          />
        </label>

        <ul>
          {filtredContacts.map(contact => {
            return (
              <li key={contact.id} className={css.contactItem}>
                <p className={css.name}>{contact.name}</p>
                <span className={css.number}>{contact.number}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
