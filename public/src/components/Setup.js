import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/setup.css';
import Nav from './Nav';

const Setup = () => {
  return (
    <div>
      <Nav />
      <h1 className={styles.header}>Setup Command Line News:</h1>
      <div className={styles.setup_containter}>
        <h3 className={styles.setup_header}>Download source code:</h3>
        <a href='http://bit.ly/2oTFpPE' className={styles.dl}>
          <button className={styles.setup_button}>
            Download <i id={styles.dlicon} className="fa fa-download" aria-hidden="true"></i>
          </button>
        </a>
        <h3 className={styles.setup_header}>Or clone from Github:</h3>
        <p className={styles.dl}>git clone https://github.com/mickberber/commandlinenews.git</p>
        <h3 className={styles.setup_header}>Set Alias in your config file:</h3>
        <h3 className={styles.sh_headers}>Bash:</h3>
        <p className={styles.dl}>open => `.bashrc`</p>
        <p className={styles.dl}>add => `alias cln='/PATH/TO/REPOSITORY/clnews.py'`</p>
        <p className={styles.dl}>run => `$ source .bashrc`</p>
        <h3 className={styles.sh_headers}>Zsh:</h3>
        <p className={styles.dl}>open => `.zshrc`</p>
        <p className={styles.dl}>add => `alias cln='/PATH/TO/REPOSITORY/clnews.py'`</p>
        <p className={styles.dl}>run => `$ source .zshrc`</p>
        <h3 className={styles.sh_headers}>Create `keys.py` and add path:</h3>
        <p className={styles.dl}>run => `$ touch keys.py`</p>
        <p className={styles.dl}>Inside of keys.py, add a PATH variable equal to the path to your repository:</p>
        <p className={styles.dl}>ex. PATH='PATH_TO_REPOSITORY'</p>
        <h3 className={styles.sh_headers}>More information about aliases:</h3>
        <p className={styles.dl}>
          <a href='http://www.hostingadvice.com/how-to/set-command-aliases-linuxubuntudebian'>
            http://www.hostingadvice.com/how-to/set-command-aliases-linuxubuntudebian
          </a>
        </p>
        <p className={styles.dl}>*Note*</p>
        <p className={styles.dl}>Command Line News requires Chrome to open</p>
        <p className={styles.dl}>Hacker News articles</p>
        <h3 className={styles.setup_header}>Learn how to use Command Line News:</h3>
        <Link to='/using' className={styles.dl_link}>
          <button className={styles.setup_button}>
            Using CLN <i id={styles.dlicon} className="fa fa-terminal" aria-hidden="true"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Setup;
