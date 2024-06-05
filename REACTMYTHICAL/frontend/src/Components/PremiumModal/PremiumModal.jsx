import React from 'react';
import styles from '../../Styles/PremiumModal/PremiumModal.module.css';

function PremiumModal({ onClose }) {
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          <h2 className={styles.title}>Premium</h2>
          <div className={styles.plans}>
            <div className={styles.plan}>
              <h3>7 Day</h3>
              <p>Get the most out of our service with free seven-day premium access! Discover exclusive features, accelerated access, and priority support.</p>
              <button className={styles.planButton}>Free</button>
            </div>
            <div className={styles.plan}>
              <h3>14 Day</h3>
              <p>Enhance your experience with our paid fourteen-day premium access! For just a small fee, you will receive advanced features, additional content, and priority support.</p>
              <button className={styles.planButton}>2000р</button>
            </div>
            <div className={styles.plan}>
              <h3>30 Day</h3>
              <p>Get the most out of our service with free seven-day premium access! Discover exclusive features, accelerated access, and priority support.</p>
              <button className={styles.planButton}>3600р</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PremiumModal;