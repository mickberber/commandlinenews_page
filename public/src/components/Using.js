import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styles from './../styles/setup.css';

const scrollToTop = ()  => {
    window.scrollTo(0,0);
}

const Using = () => {
  scrollToTop();
  return (
    <div>
      <Nav />
      <h1 className={styles.header}>Using Command Line News:</h1>
      <div className={styles.setup_containter}>
        <h3 className={styles.setup_header}>Type `cln` into your terminal</h3>
        <p className={styles.dl}>this will bring you to the CLN front page:</p>
        <img src='./assets/cln_front.png' className={styles.using_cln_front} />
        <p className={styles.dl}>type in the code of any available service(ex. cnn):</p>
        <img src='./assets/cln_service_output.png' className={styles.using_cln_service_output} />
        <p className={styles.dl}>articles will print to the command line:</p>
        <img src='./assets/cln_article.png' className={styles.using_cln_article} />
        <p className={styles.dl}>After reading, you can read more from the same service</p>
        <p className={styles.dl}>or return to the main menu:</p>
        <img src='./assets/cln_prompt.png' className={styles.using_cln_article} />
        <p className={styles.dl}>*Note*</p>
        <p className={styles.dl}>Due to number of sources that HackerNews may link to</p>
        <p className={styles.dl}>HackerNews articles will open in Chrome</p>
        <a className={styles.dl}
           style={{
             marginTop: '10px'
           }}>
          <button className={styles.setup_button}
                  onClick={scrollToTop} >
            Back To Top <i id={styles.dlicon} className="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Using;
