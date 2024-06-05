import { useState } from 'react'
import styles from '../Styles/footer.module.css'
import whatsapp from '../Images/icons8-whatsapp 1.svg'
import tg from '../Images/icons8-телеграмма-app 1.svg'
import vk from '../Images/icons8-vk (1) 1.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import footerlogo from '../Images/footerlogo.svg'
function Footer() {
  

  return (
    <>
<footer className={styles.Footer}>
  <div className={styles.footer__content}>
    <div className={styles.footer__logo}>
      <img src={footerlogo} className={styles.footer_logo} alt="Mythical Chronicles Logo" />
    </div>
    <div className={styles.footerinfo}> 
      <div className={styles.footertopinfo}>
        <p className={styles.footer_information}>It's free and easy. Discover thousands of games to play with<br />
          millions of new friends.</p>
      </div>
      <div className={styles.footer_line}/>
      <div className={styles.footercontainersocial}>
        <div className={styles.social__networks}>
          <p className={styles.footer_p_social}>we are in social networks</p>
          <div className={styles.social_icons}>
            <div className={styles.footer_social_block}> 
              <a href="#" className={styles.footer_social_whatsapp}><img src={whatsapp} className={styles.footer_img_whatsapp} /></a>
              <h2 className={styles.footer_whatsapp}>whatsapp</h2>
            </div>
            <div className={styles.footer_social_block}> 
              <a href="#" className={styles.footer_social_telegramm}><img src={tg} className={styles.footer_img_telegramm} /></a>
              <h2 className={styles.footer_telegam}>telegram</h2>
            </div>
            <div className={styles.footer_social_block}> 
              <a href="#" className={styles.footer_social_vk}><img src={vk} className={styles.footer_img_vk} /></a>
              <h2 className={styles.footer_vk}>vk</h2>
            </div>
          </div>
        </div>
        <div className={styles.site__links}>
          <Link to="/team" className={styles.footer_team}>Team</Link>
          <Link to="/about" className={styles.footer_about}>About us</Link>
          <Link to="/contact" className={styles.footer_contacts}>Contacts</Link>
        </div>
        <div className={styles.footer__company}>
          <p className={styles.footer_p_company}>© 2024 Valve Corporation. All rights reserved. All<br />
            trademarks are property of their respective owners<br />
            in the US and other countries.<br />
            VAT included in all prices where applicable.</p>
        </div>
      </div>
      <div className={styles.footer_line}/>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer
