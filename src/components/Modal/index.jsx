import React from 'react';
import styles from './styles.module.scss';

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`${styles.modal} ${isOpen && styles.is_open}`} onClick={closeModal}>
      <div className={styles.modal_container} onClick={handleModalContainerClick}>
        <div className="d-flex justify-content-end align-items-center">
          <button className={styles.modal_close} onClick={closeModal}>
            X
          </button>
        </div>
        {children}
      </div>
    </article>
  );
}

