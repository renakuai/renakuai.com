import React, { useState } from 'react';
import './_nav.scss';
import { Link } from "react-router-dom";


function Nav(props) {
  const { theme, setTheme } = props;
  const [rotate, setRotate] = useState(false);

  const changeTheme = () => {
    setRotate(true);
    setTimeout(() => {
      if ((localStorage.getItem('theme') === 'light') || !localStorage.getItem('theme')) {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
        setRotate(false);
      }
      else {
        setTheme('light');
        localStorage.setItem('theme', 'light');
        setRotate(false);
      }
    }, 400);
  }

  return (
    <nav className="Top">
      <div className="Left">
        <h5><a href="/">Rena Kuai</a></h5>
      </div>

      <div className="Right">
        <ul>
          <li><a href="/#featured">Design</a></li>
          <li><a href="/#coding">Code</a></li>

          <li><a href="https://medium.com/@renakuai" target="_blank">Writing</a></li>
          <li>
            <div className='ThemeToggle' onClick={changeTheme}>
              {theme !== 'light' ? <img className={rotate ? 'ThemeToggle Rotate' : 'ThemeToggle'} src="/icons/moon.svg" /> : <img className={rotate ? 'ThemeToggle Rotate' : 'ThemeToggle'} src="/icons/sun.svg" />}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
