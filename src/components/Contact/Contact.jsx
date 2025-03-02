import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../redux/contacts/operations.js';
import css from './Contact.module.css';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully deleted!', {
          className: 'toast-success',
        });
      })
      .catch(() => {
        toast.error('Failed to delete contact. Please try again!', {
          className: 'toast-error',
        });
      });
    setIsModalOpen(false); 
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfo}>
        <p className={css.contactName}>
          <FaUserAlt style={{ marginRight: '8px', color: '#4682B4' }} />
          {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt style={{ marginRight: '8px', color: '#4682B4' }} />
          {number}
        </p>
      </div>
      <button
        type="button"
        onClick={openModal} 
        className={css.contactButton}
      >
        Delete
      </button>

      <ModalDelete
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirm={handleDelete}
      />
    </li>
  );
}
