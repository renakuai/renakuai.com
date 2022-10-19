import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/_index.scss';
import App from './components/app/App.js';
import Home from './components/home/Home.js';
import Writing from './components/writing/Writing.js';
import Projects from './components/projects/Projects.js';
import Five from './components/projects/detail/Five.js';
import Cross from './components/projects/detail/Cross.js';
import Filters from './components/projects/detail/Filters.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/writing/" element={<Writing />}>
          </Route>
          <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/15Five-reporting/" element={<Five />} />
          <Route path="/projects/iterable-cross/" element={<Cross />} />
          <Route path="/projects/iterable-mi/" element={<Filters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

