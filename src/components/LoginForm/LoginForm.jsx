import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css'

export default function LoginForm () {
  const dispatch = useDispatch();
   console.log('Rendering LoginForm');

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
          .min(6, 'Must be at least 6 characters')
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <label className={css.formLabel}>Email</label>
        <Field type="email" name="email" className={css.formField} />
        <ErrorMessage name="email" component="p" className={css.errorMessage} />

        <label className={css.formLabel}>Password</label>
        <Field type="password" name="password" className={css.formField} />
        <ErrorMessage
          name="password"
          component="p"
          className={css.errorMessage}
        />

        <button type="submit" className={css.formButton}>
          Login
        </button>
      </Form>
    </Formik>
  );
};


