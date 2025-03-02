import Modal from 'react-modal';
import css from './ModalDelete.module.css';

Modal.setAppElement('#root');

export default function ModalDelete({ isOpen, onRequestClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Action"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2 className={css.modalTitle}>
        Are you sure you want to delete this contact?
      </h2>
      <div className={css.modalActions}>
        <button onClick={onConfirm} className={css.confirmButton}>
          Yes
        </button>
        <button onClick={onRequestClose} className={css.cancelButton}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
