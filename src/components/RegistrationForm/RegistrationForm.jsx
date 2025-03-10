import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" className={css.error} />
        </label>

        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" className={css.error} />
        </label>

        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" className={css.error} />
        </label>

        <button className={css.registerBtn} type="submit">Register</button>
      </Form>
    </Formik>
  );
};
