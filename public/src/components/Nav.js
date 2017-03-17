import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to='/'>
          Home <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </li>
      <li>
        <a href='http://commandlinenews.herokuapp.com/api/root/zip'>
          Download <i className="fa fa-download" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <Link to='/setup'>
          Set Up <i className="fa fa-info-circle" aria-hidden="true"></i>
        </Link>
      </li>
      <li>
        <Link to='/using'>
          Using CLN <i className="fa fa-terminal" aria-hidden="true"></i>
        </Link>
      </li>
      <li>
        <a href='mailto:commandlinenews@gmail.com'>
          Contact <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href='https://github.com/mickberber/commandlinenews'>
          Github <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
}

export default Nav;