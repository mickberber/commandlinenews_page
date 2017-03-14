import React from 'react';
import styles from './../styles/main.css';

const App = () => {
  return (
    <div className={styles.main}>
      <img className={styles.img} src='./logo.png'/>
      <div className={styles.btns}>
        <button className={styles.dl}>
          <a href='http://commandlinenews.herokuapp.com/api/root/zip'>
            Download Command Line News
          </a>
        </button>
        <button className={styles.learn}>
          <a className={styles.dl} href='http://github.com/mickberber/commandlinenews'>
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
