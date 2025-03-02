import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import { PulseLoader } from 'react-spinners';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <PulseLoader color="#ADD8E6" />}

      {!isLoading && filteredContacts.length === 0 && (
        <p className={css.noContactsText}>Phonebook is empty</p>
      )}
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
}
