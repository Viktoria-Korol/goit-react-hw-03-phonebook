import { Component } from 'react';
import { ContactForm} from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LOCAL_STORAGE_CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  
    componentDidMount() {
    const storageContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_CONTACTS)
    );
    if (storageContacts) {
      this.setState({
        contacts: storageContacts,
      });
    }
  }

  componentDidUpdate(_, prevStates) {
    if (prevStates.contacts !== this.state.contacts) {
      localStorage.setItem(
       LOCAL_STORAGE_CONTACTS,
        JSON.stringify(this.state.contacts)
      );
    }
  }


  onSubmitForm = contacts => {
    this.setState({ contacts: [contacts, ...this.state.contacts] });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </section>
    );
  }
}