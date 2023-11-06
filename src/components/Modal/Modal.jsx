import { useEffect } from 'react';
import css from './Modal.module.css'

export const Modal = ({ closeModal, imageUrl, children }) => {
  
  useEffect(() => {

    const handleKeyDown = evt => {
        if (evt.key === 'Escape') {
            closeModal();
        }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  },[closeModal])
      

    const handleOverayClick = evt => {
        if (evt.target === evt.currentTarget) {
            closeModal();
        }
    }


    
    return (
      <div onClick={handleOverayClick} className={css.overlay}>
        <div className={css.modal}>
          <img src={imageUrl} alt="Modal" />
          {children}
        </div>
      </div>
        )
    }

