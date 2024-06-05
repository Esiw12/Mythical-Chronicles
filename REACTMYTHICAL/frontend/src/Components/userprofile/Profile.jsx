import React, { useState, useEffect } from 'react';
import styles from './UserInfo.module.css';
import Header from '../header';
import Footer from '../footer';
import warzone from '../../Images/stream/warzone.svg';
import dota from '../../Images/stream/dota.svg';

const UserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    login: 'Yaroslav',
    name: '',
    age: '',
    email: '',
    phone: '',
    profilePicture: '',
    profilePictureFile: null
  });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Токен не найден');
        return;
      }

      const response = await fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Ошибка отправки fetch');
      }
    };

    fetchUser();
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Токен не найден');
      return;
    }

    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('age', user.age);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    if (user.profilePictureFile) {
      formData.append('profilePicture', user.profilePictureFile);
    }

    const response = await fetch('http://localhost:3000/profile', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      setIsEditing(false);
      const updatedUser = await response.json();
      setUser(updatedUser);
    } else {
      console.error('Ошибка обновления пользователя');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUser({ ...user, profilePicture: URL.createObjectURL(file), profilePictureFile: file });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Header />
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.profilePicture}>
            <img src={user.profilePicture ? `http://localhost:3000${user.profilePicture}` : 'default-avatar.png'} alt="Profile" />
            {isEditing && <input type="file" onChange={handleImageChange} className={styles.fileInput} />}
            <h2>{user.login}</h2>
          </div>
          <div className={styles.userDetails}>
            <button className={styles.editButton} onClick={handleEditClick}>{isEditing ? 'Cancel' : 'Edit'}</button>
            {isEditing ? (
              <div className={styles.editFields}>
                <input
                  type="text"
                  name="name"
                  value={user.name || ''}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  type="number"
                  name="age"
                  value={user.age || ''}
                  onChange={handleChange}
                  placeholder="Age"
                />
                <input
                  type="email"
                  name="email"
                  value={user.email || ''}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={user.phone || ''}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                <button className={styles.saveButton} onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div className={styles.userInfo}>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.centerSection}>
          <div className={styles.lastActivity}>
            <h2>LAST ACTIVITY</h2>
            <ul>
              <li>5m ago: add to friends LOCALHOST</li>
              <li>50m ago: add to library Dota 2</li>
              <li>50m ago: add to library Dota 2</li>
              <li>5m ago: add to friends LOCALHOST</li>
            </ul>
          </div>
        </div>
        <div className={styles.favoriteGames}>
          <h2 className={styles.Favor}>Favorite games</h2>
          <div className={styles.games}>
            <div className={styles.game}>
              <img src={warzone} alt="Call of Duty: Warzone" />
            </div>
            <div className={styles.game}>
              <img src={dota} alt="Dota 2" />
            </div>
            <div className={styles.game}>
              <img src={warzone} alt="Call of Duty: Warzone" />
            </div>
            <div className={styles.game}>
              <img src={dota} alt="Dota 2" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInfo;
