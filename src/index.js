import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/_index.scss';
import App from './components/app/App.js';
import Home from './components/home/Home.js';
import Exosphere from './components/projects/Boomi/Exosphere.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/boomi_exosphere" element={<Exosphere />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

