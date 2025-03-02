import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactsPage.module.css'
import { Toaster } from 'react-hot-toast';

export default function ContactsPage() {
  return (
    <div className={css.contactsPageContainer}>
      <Toaster position="top-right" reverseOrder={false} />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
  
}
