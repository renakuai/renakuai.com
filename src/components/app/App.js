import React from 'react';
import './_app.scss';
import Nav from '../nav/Nav.js';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="Grid Light">
      <div className="App">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
