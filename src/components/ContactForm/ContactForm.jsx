import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'At least 3 characters')
    .max(50, 'Max 50 characters')
    .required('Required field'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Invalid number format. Example: 123-456-7890'
    )
    .required('Required field'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully added!', {
          className: 'toast-success',
        });
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Failed to add contact. Please try again!', {
          className: 'toast-error',
        });
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.formLabel}>
          Name
          <Field type="text" name="name" className={css.formField} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label className={css.formLabel}>
          Number
          <Field
            type="text"
            name="number"
            placeholder="XXX-XXX-XXXX"
            className={css.formField}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
