import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/selectors';
import ContactsListItem from 'components/ContactsListItem';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts =
    [
      ...contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      ),
    ] || [];

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactsList;
