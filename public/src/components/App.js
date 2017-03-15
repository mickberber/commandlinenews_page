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
        <br />
        <div style={{
          'margin': '20px 0 0 0',
          'font-size': '30px',
          'font-weight': 'bold'
        }}>
          Supported Services
        </div>
        <br />
        <div className='images'>
          <img src='./hacker-news.jpg'
               style={{
                 heigth: '200px',
                 width: '200px',
                 margin: '20px 20px'
               }} />
          <img src='./cnn.png'
               style={{
                 heigth: '200px',
                 width: '200px',
                 margin: '20px 20px'
               }}/>
          <img src='./The_Guardian.png'
               style={{
                 heigth: '100px',
                 width: '350px',
                 margin: '20px 20px'
               }} />
          <img src='./ap.png'
               style={{
                 heigth: '200px',
                 width: '200px',
                 margin: '20px 20px'
               }} />
        </div>
      </div>
    </div>
  );
}

export default App;
