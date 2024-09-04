import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Style/game/header.module.css';
import krevetkaImage from '../../image/krevetka.png';
import back from '../../image/back.png';
import logImage from '../../image/log.png';
import material from '../../image/xz.png'
function LvlHeader() {

  return (
    <header className={styles.header}>
      <div className={styles.headcontent}>
        <Link to="/"><img className={styles.logo} src={krevetkaImage} alt="Logo" /></Link>
        <p>Crystal Tech</p>
      </div>

      <div className={styles.infoGuide}>
        <Link to="/"><img className={styles.back} src={back} alt="Back" /></Link>
        <Link to="/"><img className={styles.material} src ={material} alt="sprav"/></Link>
        <Link to="#modal" id="openModal"><img className={styles.login} src={logImage} alt="Login" /></Link>
      </div>
    </header>
  );
}

export default LvlHeader;
