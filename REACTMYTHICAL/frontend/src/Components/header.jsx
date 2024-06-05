import { useState } from 'react'
import styles from '../Styles/header.module.css'
import corona from '../Images/corona.svg'
import FriendListModal from './FriendListModal/FriendListModal'
import headerlogo from "../Images/mythical.svg"
import PremiumModal from './PremiumModal/PremiumModal';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Header() {
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  const openPremiumModal = () => setIsPremiumModalOpen(true);
  const closePremiumModal = () => setIsPremiumModalOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/login');
  };
  return (
    <>
{/* Начало header */}
<header className={styles.Header}>
  <nav className={styles.HeaderContainer}>
    <ul className={styles.HeaderUl}>
      <li className={styles.HeaderUl__Logo}><span className={styles.Gradient__Text}>Mystical<br />Chronicles</span></li> {/*текст-градиент*/}
      <li className={styles.HeaderUl__Divider} /> {/*линия*/}
      <li className={styles.HeaderUl__Store}><a href="#">Store</a></li>
      <li className={styles.HeaderUl__Library}><Link to="/library">Library</Link></li>
      <li className={styles.HeaderUl__Forum}><Link to="/forum">Forum</Link></li>
      <li className={styles.HeaderUl__Stream}><Link to="/stream">Stream</Link></li>
      <li className={styles.HeaderUl__FriendList}><a href="#" onClick={openModal}>FriendsList</a></li>
      <li className={styles.HeaderUl__News}><a href="#">News</a></li>
      <li className={styles.HeaderUl__Button__Status}><button className={styles.Status} onClick={openPremiumModal}><img className={styles.HeaderUl__Image__Crown} src={corona} />premium</button></li> {/*кнопка-статуса*/}
      <li className={styles.HeaderUl__Button__Profile}><button className={styles.Profile}  onClick={handleProfileClick}>profile<img className={styles.HeaderUl__Image__Logo} src={headerlogo} /></button></li> {/*кнопка-профиля*/}
    </ul>
  </nav>
</header>
{/* Конец header */}
{isModalOpen && <FriendListModal onClose={closeModal} />}
{isPremiumModalOpen && <PremiumModal onClose={closePremiumModal} />}
    </>
  )
}

export default Header
