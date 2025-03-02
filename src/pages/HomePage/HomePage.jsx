import css from './HomePage.module.css';
import { FaBook } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className={css.homePageContainer}>
      <FaBook className={css.logo} size={100} color="white" />
      <h1 className={css.title}>Welcome to the Contact Book</h1>
      <p className={css.textContent}>
        Manage your contacts efficiently and securely.
      </p>
    </div>
  );
}
