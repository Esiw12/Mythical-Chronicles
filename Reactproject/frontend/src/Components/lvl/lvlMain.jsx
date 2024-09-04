import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Style/lvl/main.module.css'; 
import first from '../../image-lvl/first.png';
import housetwo from '../../image-lvl/house2.png';
import tri from '../../image-lvl/tri.png';
import four from '../../image-lvl/four.png'; 
function lvlMain(){
    return(
<main className={styles.main}>
    <div className={styles.firstlvl}>
      <Link to="/game" className={styles.first_house}><img className={styles.firsthouse} src={first} /></Link>
      <div className={styles.textleftlvl}>
        <p>
          <b>Level 1</b><br />
          Самое сложное-начать<br />
          но разобравшись<br />
          обучение становится<br />
          в разы веселее<br />
          и интереснее
        </p>
      </div>
    </div>
    <div className={styles.secondlvl}>
      <Link to="/game"><img className={styles.secondhouse} src={housetwo} /></Link>
      <div className={styles.textspravalvl}>
        <p>
          <b>Level 2</b><br />
          Отлично, ты справился<br />
          с первым уровнем!<br />
          Второй уровень уже <br />
          сложнее,но от того он<br />
          и более увлекательный
        </p>
      </div>
    </div>
    <div className={styles.thirdlvl}>
      <Link to="/game"><img className={styles.thirsthouse} src={tri} /></Link>
      <div className={styles.textleftlvl}>
        <p>
          <b>Level 3</b><br />
          Ты огромный молодец!<br />
          Уже пройдена половина<br />
          пути, продолжай игру и<br />
          развивай свои скилы!
        </p>
      </div>
    </div>
    <div className={styles.fourthlvl}>
      <Link to="/game"><img className={styles.fourthhouse} src={four} /></Link>
      <div className={styles.textspravalvl}>
        <p>
          <b>Level 4</b><br />
          Опыт и дисциплина<br />
          важны,ещё чуть-чуть и<br />
          ты достигнешь цели!<br />
          Я горжусь тобой!
        </p>
      </div>
    </div>
  </main>
    )
}
export default lvlMain;
