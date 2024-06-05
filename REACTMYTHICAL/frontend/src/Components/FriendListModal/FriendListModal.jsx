import React, { useState } from 'react';
import styles from '../../Styles/FrinedList/FriendListModal.module.css';
import Captain from '../../Images/Team/captain.svg';

function FriendListModal({ onClose }) {
  const [showOnlineFriends, setShowOnlineFriends] = useState(true); //две переменные состояния
  const [showOfflineFriends, setShowOfflineFriends] = useState(true); //две переменные состояния
  const [showGroupChat, setShowGroupChat] = useState(false); //две переменные состояния
  const [selectedFriends, setSelectedFriends] = useState([]);//две переменные состояния

  const toggleOnlineFriends = () => setShowOnlineFriends(!showOnlineFriends); //Эта функция переключает состояние видимости списка онлайн-друзей
  const toggleOfflineFriends = () => setShowOfflineFriends(!showOfflineFriends); //Эта функция переключает состояние видимости списка офлайн-друзей
  const toggleGroupChat = () => setShowGroupChat(!showGroupChat); //функция переключает состояние видимости секции группового чата
 //функция обрабатывает выбор друзей для группового чата
  const handleFriendSelect = (friend) => { 
    setSelectedFriends((prevSelected) =>
      prevSelected.includes(friend)
        ? prevSelected.filter((f) => f !== friend)
        : [...prevSelected, friend]
    );
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>FriendList</h2>
        <div className={styles.profile}>
          <img src={Captain} alt="Profile" className={styles.profileImage} />
          <div>
            <p>play in: Hollow knight</p>
            <p>online: 15 hours</p>
          </div>
        </div>
        <hr className={styles.separator} />
        <div className={styles.chatSearch}>
          <button className={styles.chatButton} onClick={toggleGroupChat}>group chat</button>
          <input type="text" placeholder="search friend:" className={styles.searchInput} />
        </div>
        <hr className={styles.separator} />
        {showGroupChat && (
          <div className={styles.friendList}>
            <p>Select friends to add to group chat:</p>
            <div className={styles.friend}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={() => handleFriendSelect('Friend 1')}
                checked={selectedFriends.includes('Friend 1')}
              />
              <img src={Captain} alt="Friend 1" className={styles.friendImage} />
              <div className={styles.friendLabel}>Friend 1</div>
            </div>
            <div className={styles.friend}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={() => handleFriendSelect('Friend 2')}
                checked={selectedFriends.includes('Friend 2')}
              />
              <img src={Captain} alt="Friend 2" className={styles.friendImage} />
              <div className={styles.friendLabel}>Friend 2</div>
            </div>
          </div>
        )}
        <div className={styles.friendSection}>
          <button onClick={toggleOnlineFriends} className={styles.toggleButton}>
            {showOnlineFriends ? '-' : '+'} Friends online:
          </button>
          {showOnlineFriends && (
            <div className={styles.friendList}>
              <div className={styles.friend}>
                <img src={Captain} alt="Friend 1" className={styles.friendImage} />
                <div>
                  <p>play in: Hollow knight</p>
                  <p>online: 15 hours</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.friendSection}>
          <button onClick={toggleOfflineFriends} className={styles.toggleButton}>
            {showOfflineFriends ? '-' : '+'} Friends offline:
          </button>
          {showOfflineFriends && (
            <div className={styles.friendList}>
              <div className={styles.friend}>
                <img src={Captain} alt="Friend 2" className={styles.friendImage} />
                <div>
                  <p>play in: None</p>
                  <p>online: 2 hours ago</p>
                </div>
              </div>
              <div className={styles.friend}>
                <img src={Captain} alt="Friend 3" className={styles.friendImage} />
                <div>
                  <p>play in: None</p>
                  <p>online: 6 hours ago</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendListModal;
