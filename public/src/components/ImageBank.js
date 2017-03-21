import React from 'react';
import styles from './../styles/main.css';

const ImageBank = () => {
  return (<div>
      <br />
      <a href='https://www.python.org'>
        <img src='https://www.python.org/static/community_logos/python-powered-w.svg'
             className={styles.pyimg} />
      </a>
      <br />
      <div className={styles.imgbank}>
        <hr />
        <div className={styles.supported}>
          Supported Services
        </div>
        <br />
        <a href='https://news.ycombinator.com'>
          <img src='./assets/hacker-news.jpg'
               className={styles.imghn} />
        </a>
        <a href='http://www.cnn.com'>
          <img src='./assets/cnn.png'
               className={styles.imgsqr}/>
        </a>
        <a href='https://www.theguardian.com/us'>
          <img src='./assets/The_Guardian.png'
               className={styles.imgrect} />
        </a>
        <a href='https://bigstory.ap.org'>
          <img src='./assets/ap.png'
               className={styles.imgsqr} />
        </a>
        <a href='http://www.aljazeera.com/'>
          <img src='./assets/aljaz.jpg'
               className={styles.imgsqr} />
        </a>
        <a href='https://www.nytimes.com/'>
          <img src='./assets/NYTLogo.jpg'
               className={styles.imgrectnyt} />
        </a>
        <a href='https://www.washingtonpost.com/'>
          <img src='./assets/wp.jpg'
               className={styles.imgsqr} />
        </a>
      </div>
    </div>);
}

export default ImageBank;
