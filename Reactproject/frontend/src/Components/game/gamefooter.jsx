import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Style/lvl/footer.module.css';
import logoImage from '../../image/krevetka.png';
import tgImage from '../../image/TG.png';
import vkImage from '../../image/VK.png';
import youtubeImage from '../../image/you.png';
import whatsappImage from '../../image/what.png';
function GameFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Link to="/"><img className={styles.iconLogo} src={logoImage} alt="Logo" /></Link>
      </div>
      <div className={styles.footerInformation}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />Aenean commodo ligula eget dolor. Aenean massa.
          <br />Cum sociis natoque penatibus et magnis dis parturient.
        </p>
      </div>
      <div className={styles.footerSocial}>
        <div className={styles.socialIcons}>
          <Link to="/"><img className={styles.forum} src={tgImage} alt="Telegram" /></Link>
          <Link to="/"><img className={styles.forum} src={vkImage} alt="VK" /></Link>
          <Link to="/"><img className={styles.forum} src={youtubeImage} alt="YouTube" /></Link>
          <Link to="/"><img className={styles.forum} src={whatsappImage} alt="WhatsApp" /></Link>
        </div>
      </div>
    </footer>
  );
}

export default GameFooter;
