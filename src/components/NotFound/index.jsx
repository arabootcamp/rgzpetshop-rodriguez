import React from 'react';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center py-5">
      <img src="/assets/imgs/notfound.png" alt="not found" className={`${styles.box_img}`} />
    </div>
  )
}

export default NotFound;