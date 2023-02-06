import { useDispatch, useSelector } from 'react-redux';
import {
  addNewContacts,
  deleteIdContact,
  filterContacts,
} from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Section, Title } from './App.styled';

export function App() {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.some(({ name }) => name === data.name)
      ? Notify.warning(`${data.name} is already in contacts`)
      : dispatch(addNewContacts(newContact));
  };

  const deleteContact = id => {
    dispatch(deleteIdContact(id));
  };

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <Form addNewContact={addNewContact} />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
}
