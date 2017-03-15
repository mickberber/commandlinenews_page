import React from 'react';
import styles from './../styles/main.css';

const ImageBank = () => {
  return (<div className={styles.imgbank}>
    <div className={styles.supported}>
      Supported Services
    </div>
    <br />
    <img src='./hacker-news.jpg'
         className={styles.imghn} />
    <img src='./cnn.png'
         className={styles.imgsqr}/>
    <img src='./The_Guardian.png'
         className={styles.imgrect} />
    <img src='./ap.png'
         className={styles.imgsqr} />
  </div>);
}

export default ImageBank;
