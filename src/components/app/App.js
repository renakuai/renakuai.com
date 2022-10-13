import React, { useEffect, useState } from 'react';
import './_app.scss';
import Nav from '../nav/Nav.js';
import { Outlet } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('light')
    }
    else if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }, [])

  const themeClass = () => {
    if (theme === 'dark') {
      return 'Grid Dark';
    }
    else {
      return 'Grid Light';
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
