import React from 'react';
import styles from './../styles/main.css';

const ImageBank = () => {
  return (<div>
      <br />
      <img src='https://www.python.org/static/community_logos/python-powered-w.svg'
           className={styles.pyimg} />
      <br />
      <div className={styles.imgbank}>
        <div className={styles.supported}>
          Supported Services
        </div>
        <br />
        <img src='./assets/hacker-news.jpg'
             className={styles.imghn} />
        <img src='./assets/cnn.png'
             className={styles.imgsqr}/>
        <img src='./assets/The_Guardian.png'
             className={styles.imgrect} />
        <img src='./assets/ap.png'
             className={styles.imgsqr} />
        <img src='./assets/aljaz.jpg'
             className={styles.imgsqr} />
      </div>
    </div>);
}

export default ImageBank;
