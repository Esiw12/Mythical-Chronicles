import React from "react";
import styles from "../../Style/game/svg.module.css";
const SVGComponent = () => {
  return (
    <div className={styles.circleContainer}>
      <div className={`${styles.circle} ${styles.firstCircle}`}></div>
      <div className={`${styles.circle} ${styles.secondCircle}`}></div>
      <div className={`${styles.circle} ${styles.thirdCircle}`}></div>
      <div className={`${styles.circle} ${styles.fourthCircle}`}></div>
      <div className={`${styles.circle} ${styles.fifthCircle}`}></div>
    </div>
  );
};

export default SVGComponent;
