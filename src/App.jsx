import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Section from "./components/Section";
import Container from "./components/Container";
import { nanoid } from 'nanoid';


export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const ReturnName = contacts.find((contact) => contact.name === name);
    if (ReturnName) {
      alert("This name is already in the phone book ");
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };


  deleteContact = (contactsId) => {
        this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
        }));
  };
  
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  render() {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
    <Container>
      <h1>Phonebook</h1>
      <Section>
          <ContactForm onSubmit={this.addContact }/> 
      </Section>  
      <Section title="Contacts">
        <Filter  value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Section>
    </Container>
  );
  } 
}







   







