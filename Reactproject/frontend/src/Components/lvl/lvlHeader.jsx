import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Style/lvl/header.module.css';
import krevetkaImage from '../../image/krevetka.png';
import back from '../../image/back.png';
import logImage from '../../image/log.png';

function LvlHeader() {
  

  const toggleDropdown = () => {
    var dropdown = document.querySelector(`.${styles.dropdowncontent}`);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  };


  React.useEffect(() => {
    function handleClickOutside(event) {
      var dropdown = document.querySelector(`.${styles.dropdowncontent}`);
      if (dropdown && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headcontent}>
        <Link to="/"><img className={styles.logo} src={krevetkaImage} alt="Logo" /></Link>
        <p>Crystal Tech</p>
      </div>

      <div className={styles.infoGuide}>
        <Link to="/"><img className={styles.back} src={back} alt="Back" /></Link>
        <div className={styles.leveldropdown} >
          <button onClick={toggleDropdown}></button>
          <div className={styles.dropdowncontent}>
            <div className={styles.circledrop}></div>
            <Link className={styles.lvltext} to="/game">Level 1</Link>
            <Link className={styles.lvltext} to="/game">Level 2</Link>
            <Link className={styles.lvltext} to="/game">Level 3</Link>
            <Link className={styles.lvltext} to="/game">Level 4</Link>
          </div>
        </div>
        <Link to="#modal" id="openModal"><img className={styles.login} src={logImage} alt="Login" /></Link>
      </div>
    </header>
  );
}

export default LvlHeader;
