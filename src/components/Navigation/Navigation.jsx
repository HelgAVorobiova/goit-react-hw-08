import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
