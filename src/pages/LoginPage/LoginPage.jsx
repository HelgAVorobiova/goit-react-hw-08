import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.pageContainer}>
      <div className={css.loginBox}>
        <h2 className={css.title}>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
