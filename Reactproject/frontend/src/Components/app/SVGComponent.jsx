import React from 'react';
import styles from '../../Style/index/SVGComponent.module.css'; 

const SVGComponent = () => {
  return (
    <div className={styles.circleContainer}>
      <svg  width="779" height="619" viewBox="0 0 779 619" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <path
          d="M4 5C21.5868 20.9355 77.8644 47.6581 162.281 27.0645C267.802 1.32258 305.838 31.9677 309.519 69.9677C314.269 119 26.0857 225.645 60.4413 282.032C94.7968 338.419 632.216 -6.03226 664.117 95.7097C696.019 197.452 189.275 356.806 262.894 431.581C336.513 506.355 646.94 229.323 688.657 316.355C730.375 403.387 515.652 405.839 622.4 501.452C707.798 577.942 761.049 607.688 777 613"
          stroke="url(#paint0_linear_218_212)" strokeWidth="11" />
        <defs>
          <linearGradient id="paint0_linear_218_212" x1="83.754" y1="4.99998" x2="718.775" y2="586.64" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.465" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={`${styles.circle} ${styles.fifthCircle}`}></div>
      <div className={`${styles.circle} ${styles.firstCircle}`}></div>
      <div className={`${styles.circle} ${styles.secondCircle}`}></div>
      <div className={`${styles.circle} ${styles.thirdCircle}`}></div>
    </div>
  );
};

export default SVGComponent;
