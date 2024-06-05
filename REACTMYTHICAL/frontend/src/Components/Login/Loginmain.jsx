import React, { useState } from 'react';
import styles from '../../Styles/Login/login.module.css';
import google from '../../Images/ggl.png';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState(''); //перменные состояния
  const [password, setPassword] = useState(''); //переменные состояния
  const navigate = useNavigate(); //хук для перенаправления

  const handleLogin = async (e) => {
    e.preventDefault(); //предотвращает перезагрузку страницы
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/User');
    } else {
      alert('Ошибка авторизации');
    }
  };

  return (
    <main className={styles.mainlogin}>
      <div className={styles.darkoverlay} />
      <div className={styles.login_form_container}>
        <div className={styles.login_form}>
          <h2>Login Form</h2>
          <form onSubmit={handleLogin}>
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
            </div>
            <a href="#" className={styles.forgot_password}>Forgot Password?</a>
            <button type="submit" className={styles.login_button}>Login</button>
            <p className={styles.other_login}>Or login with</p>
            <div className={styles.social}>
              <button className={styles.social_login_vk}>Vk</button>
              <button className={styles.social_login_google}><img src={google} />Google</button>
            </div>
            <p className={styles.registration}>Don't have account? <Link to="/reg">Signup now</Link></p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
