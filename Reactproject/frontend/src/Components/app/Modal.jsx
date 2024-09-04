import React, { useState } from 'react';
import styles from '../../Style/index/modal.module.css';
import krestImage from '../../image/krestik.png';
import axios from 'axios';
const Modal = ({ isOpen, onClose,setIsLoggedIn }) => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleToggle = () => {
    setIsLoginActive(!isLoginActive);
  };
  const handleLoginSubmit = async (event) => {
    event.preventDefault(); 
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
      console.log(response.data); 
      localStorage.setItem('token', response.data.token); 
    localStorage.setItem('userId', response.data.userId);
      setIsLoggedIn(true);
      onClose(); 
    } catch (error) {
      console.error('Ошибка при входе', error);
    }
  };
  
  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', { username, email, password });
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error('Ошибка при регистрации', error);
    }
  };

  const modalStyle = {
    display: isOpen ? 'block' : 'none', 
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  };

  return isOpen ? (
    <>
      <div className={styles.modalBackground} onClick={onClose} style={{ display: isOpen ? 'block' : 'none' }}></div>
      <div className={styles.modal} style={modalStyle}>
        <div className={styles.wrapper}>
          <div className={styles.cardSwitch}>
            <label className={styles.switch}>
              <input 
                className={styles.toggle} 
                type="checkbox" 
                checked={isLoginActive} 
                onChange={handleToggle} 
              />
              <span className={styles.slider}></span>
              <div className={styles.cardSideLogIn}>Log in</div>
              <div className={styles.cardSideSignUp}>Sign up</div>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <div className={styles.circleModalFront}></div>
                  <button onClick={onClose} className={styles.closeModal}>
                    <img className={styles.krest} src={krestImage} alt="Закрыть" />
                  </button>
                  <div className={styles.title}>Log in</div>
                  <form onSubmit={handleLoginSubmit} className={styles.flipCardForm}>
                    <input type="email" placeholder="Email" name="email" className={styles.flipCardInput} />
                    <input type="password" placeholder="Password" name="password" className={styles.flipCardInput} />
                    <button type="submit" className={styles.flipCardBtn}>Let`s go!</button>
                  </form>
                </div>
                <div className={styles.flipCardBack}>
                  <div className={styles.circleModalBack}></div>
                  <button onClick={onClose} className={styles.closeModal}>
                    <img className={styles.krest} src={krestImage} alt="Close" />
                  </button>
                  <div className={styles.title}>Sign up</div>
                  <form onSubmit={handleSignUpSubmit} className={styles.flipCardForm}>
                    <input type="text" placeholder="Name" name="username" className={styles.flipCardInput} />
                    <input type="email" placeholder="Email" name="email" className={styles.flipCardInput} />
                    <input type="password" placeholder="Password" name="password" className={styles.flipCardInput} />
                    <button type="submit" className={styles.flipCardBtn}>Confirm!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
