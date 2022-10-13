import React, { useEffect, useState } from 'react';
import './_app.scss';
import Nav from '../nav/Nav.js';
import { Outlet } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if ((localStorage.getItem('theme') === 'light') || !localStorage.getItem('theme')) {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  }, [])

  const themeClass = () => {
    if (theme === 'light') {
      return 'Grid Light';
    }
    else {
      return 'Grid Dark';
    }
  }

  return (
    <div className={themeClass()}>
      <div className="App">
        <Nav theme={theme} setTheme={setTheme} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
