import React, { useEffect } from 'react';
import styles from '../../Styles/team/team.module.css'
import informant from '../../Images/Team/informant.svg'
import designer from '../../Images/Team/designer.svg'
import captain from '../../Images/Team/captain.svg'
import salix from '../../Images/Team/salix.svg'
import stepa from '../../Images/Team/stepa.svg'
import { createBubble } from './bubble';
function Team() {
    useEffect(() => {
        const interval = setInterval(createBubble, 300);
        return () => clearInterval(interval); 
      }, []);
  return (
    <>
{/* Начало main */}
<main className={styles.main}>
  <div className={styles.darkoverlay} />  
  <div className={styles.team}>
    <h1>Our Team</h1>
    <div className={styles.member}>
      <img src={stepa} alt="Assistant" />
      <p className={styles.ASSISTANT}>ASSISTANT</p>
    </div>
    <div className={styles.member}>
      <img src={designer} alt="Designer" />
      <p className={styles.DESIGNER}>DESIGNER</p>
    </div>
    <div className={styles.member}>
      <img src={captain} alt="Captain" />
      <p className={styles.CAPTAIN}>CAPTAIN</p>
    </div>
    <div className={styles.member}>
      <img src={informant} alt="Informant" />
      <p className={styles.INFORMANT}>INFORMANT</p>
    </div>
    <div className={styles.member}>
      <img src={salix} alt="Assistant" />
      <p className={styles.ASSISTANT}>ASSISTANT</p>
    </div>
  </div>
</main>
  
{/* Конец main */}

    </>
  )
}

export default Team
