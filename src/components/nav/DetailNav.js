import React, { useState } from 'react';
import './_detailnav.scss';
import { Link } from "react-router-dom";


function DetailNav(props) {
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
    <div className="Background">

      <nav className="Top Background">
        <div className="Left">
          <h5><a href="/">Rena Kuai</a></h5>
          <a href="/"><p className="Breadcrumb">← Back to home</p></a>
        </div>

        <div className="Right">
          <div className='ThemeToggle' onClick={changeTheme}>
            {theme !== 'light' ? <img className={rotate ? 'ThemeToggle Rotate' : 'ThemeToggle'} src="/icons/moon.svg" /> : <img className={rotate ? 'ThemeToggle Rotate' : 'ThemeToggle'} src="/icons/sun.svg" />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DetailNav;
