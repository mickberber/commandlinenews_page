import React from 'react';

import ImageBank from './ImageBank';
import Buttons from './Buttons';
import styles from './../styles/main.css';

const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <img className={styles.logo} src='./assets/logo.png'/>
        <Buttons />
        <ImageBank />
      </div>
    </div>
  );
}

export default App;
