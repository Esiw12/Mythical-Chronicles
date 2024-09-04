import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Style/index/header.module.css';
import krevetkaImage from '../../image/krevetka.png';
import spravImage from '../../image/sprav.png';
import forumImage from '../../image/forum.png';
import logImage from '../../image/log.png';
import { useNavigate } from 'react-router-dom';
function Header({ openModal, isLoggedIn }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (!isLoggedIn) {
      openModal();
    } else {
      navigate('/profile'); 
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.headContent}>
      <Link to="/">
          <img className={styles.forum} src={krevetkaImage} alt="Logo" />
        </Link>
        <p className={styles.headContentP}>Crystal Tech</p>
      </div>
      <div className={styles.infoGuide}>
      <Link to="/" className={styles.infoGuideA}>
          <img src={spravImage} alt="Справка" />
        </Link>
        <Link to="/" className={styles.infoGuideA}>
          <img src={forumImage} alt="Форум" />
        </Link>
        <button className={`${styles.infoGuideA} ${styles.buttonReset}`} onClick={handleButtonClick}>
          <img src={logImage} alt="Login" />
        </button>
      </div>
    </header>
  );
}

export default Header;
