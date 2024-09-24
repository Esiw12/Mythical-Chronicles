import React from 'react';
import styles from '../../Styles/main/modal.module.css';
import '../../Styles/main/modal.module.css'
function Modal({ isOpen, onClose }) {

    if (!isOpen) return null;
    const modalStyle = {
      display: isOpen ? 'block' : 'none', 
      position: 'fixed',
      zIndex: 1,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'auto',
      backgroundColor: 'rgba(0,0,0,0.4)', 
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullname: event.target.fullname.value,
      phone: event.target.phone.value,
      email: event.target.email.value
    };

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Success:', result);
      alert('Форма успешно отправлена!');
      onClose(); // Закрытие модального окна после отправки
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  return (
    <> 
<div id="myModal" className={styles.modal}  style={modalStyle}>
  <div className={styles.modalcontent}>
  <span className={styles.close} onClick={onClose}>&times;</span>
    <form onSubmit={handleSubmit} action="#" method="post">
      <p className={styles.svyaz}>Мы свяжемся с вами</p>
      <label htmlFor="fname">Ваше имя и фамилия</label>
      <input type="text" id="fname" name="fullname" placeholder="ФИО" />
      <label htmlFor="phone">Ваш номер телефона</label>
      <input type="tel" id="phone" name="phone" placeholder="+7 999 999 99 99" />
      <label htmlFor="email">Ваш email</label>
      <input type="email" id="email" name="email" placeholder="Email" />
      <input type="submit" defaultValue="ОТПРАВИТЬ" />
      <p className={styles.sogl}>Отправляя данную форму, вы соглашаетесь с нашей политикой обработки персональных данных</p>
    </form>
  </div>
</div>

</>
)
}
export default Modal;
