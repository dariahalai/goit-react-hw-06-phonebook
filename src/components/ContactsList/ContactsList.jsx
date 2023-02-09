import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../../redux/selectors';
import ContactsListItem from 'components/ContactsListItem';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts =
    [
      ...contacts.filter(contact =>
        contact.contactName.toLowerCase().includes(filter)
      ),
    ] || [];

  return (
    <ul>
      {visibleContacts.map(({ id, contactName, contactNumber }) => (
        <ContactsListItem key={id} id={id} name={contactName} number={contactNumber} />
      ))}
    </ul>
  );
};

export default ContactsList;
