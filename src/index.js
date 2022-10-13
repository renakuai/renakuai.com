import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/_index.scss';
import App from './components/app/App.js';
import Home from './components/home/Home.js';
import Writing from './components/writing/Writing.js';
import Projects from './components/projects/Projects.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="writing" element={<Writing />} />
          <Route path="projects" element={<Projects />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

