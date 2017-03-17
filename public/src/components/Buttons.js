import React from 'react';

import styles from './../styles/main.css';

const Buttons = () => {
  return (<div>
    <button className={styles.btn}>
      <a className={styles.atag} href='http://commandlinenews.herokuapp.com/api/root/zip'>
        Download Command Line News
      </a>
    </button>
    <button className={styles.btn}>
      <a className={styles.atag} href='http://github.com/mickberber/commandlinenews'>
        Learn how to set up Command Line News
      </a>
    </button>
  </div>);
}

export default Buttons;
