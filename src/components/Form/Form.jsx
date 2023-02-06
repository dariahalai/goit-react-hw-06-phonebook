import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Button, FormContainer } from './Form.styled';

export default Form;

function Form({ addNewContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });
    setName('');
    setNumber('');
  };
  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <div>
        <Label>
          Name
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            placeholder="Enter number 000-00-00"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </div>
      <Button disabled={!name || !number}>Add new contact</Button>
    </FormContainer>
  );
}

Form.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
