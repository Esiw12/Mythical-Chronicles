// src/components/Reg/Reg.jsx
import React, { useState } from 'react';
import styles from '../../Styles/Reg/reg.module.css';
import google from '../../Images/ggl.png';
import { useNavigate, Link } from 'react-router-dom';

function Reg() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Ошибка при вводе пароля');
      return;
    }

    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password, email, phone }),
    });

    if (response.ok) {
      navigate('/login');
    } else {
      alert('Ошибка регистрации');
    }
  };

  return (
    <main className={styles.mainreg}>
      <div className={styles.darkoverlay} />
      <div className={styles.reg_form_container}>
        <div className={styles.reg_form}>
          <h2>Registration Form</h2>
          <form onSubmit={handleRegister}>
            <div className={styles.input_container}>
              <input
                type="text"
                id="login"
                placeholder="Login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.reg_button}>Create</button>
            <p className={styles.other_reg}>Or registration with</p>
            <div className={styles.social}>
              <button className={styles.social_reg_vk}>Vk</button>
              <button className={styles.social_reg_google}><img src={google} />Google</button>
            </div>
            <p className={styles.login}>Have account? <Link to="/login">Sign in now</Link></p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Reg;
