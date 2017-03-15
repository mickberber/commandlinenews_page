import React from 'react';

import ImageBank from './ImageBank';
import Buttons from './Buttons';
import styles from './../styles/main.css';

const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <img className={styles.logo} src='./logo.png'/>
        <Buttons />
        <br />
        <img src='https://www.python.org/static/community_logos/python-powered-w.svg'
             className={styles.pyimg} />
        <br />
        <ImageBank />
      </div>
    </div>
  );
}

export default App;
