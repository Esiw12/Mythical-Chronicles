import React from 'react';
import styles from '../../Styles/Notification/notification.module.css';

function Notification({ message, onClose }) {
  return (
    <div className={styles.notification}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>×</button>
    </div>
  );
}

export default Notification;
