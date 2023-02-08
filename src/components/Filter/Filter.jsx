import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    const normalizedFilter = filter.toLowerCase().trim();
    dispatch(filterContacts(normalizedFilter));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={changeFilter}
        placeholder="Enter name"
      />
    </Label>
  );
};

export default Filter;
