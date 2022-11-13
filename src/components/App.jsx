import React from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  // userId = nanoid(10);

  getName = evt => {
    this.setState({
      name: evt.target.value,
    });
  };

  addContact = evt => {
    evt.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, id: nanoid(10) },
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
          <button type="submit" className={css.btnContact}>
            Add contact
          </button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
