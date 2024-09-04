import React from "react";
import styles from '../../Style/user/userheader.module.css';
import {Link} from 'react-router-dom';
import krevetkaImage from '../../image/krevetka.png';
function userHeader() { 
    return (
      <header className={styles.header}>
        <div className={styles.headContent}>
         <Link to="/">
            <img className={styles.forum} src={krevetkaImage} alt="Logo" />
          </Link>
          <p className={styles.headContentP}>Crystal Tech</p>
        </div>
      </header>
    );
  }
  
  export default userHeader;
  