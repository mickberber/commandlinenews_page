import React from 'react';

import styles from './../styles/main.css';
import Nav from './Nav';
import ImageBank from './ImageBank';

const App = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.center}>
        <img className={styles.logo} src='./assets/logo.png'/>
        <ImageBank />
      </div>
    </div>
  );
}

export default App;
