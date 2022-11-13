import React from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
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

  render() {
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
        <ul>
          {this.state.contacts.map(contact => {
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
