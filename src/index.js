import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './styles/_index.scss';
import App from './components/app/App.js';
import Home from './components/home/Home.js';
import Exosphere from './components/projects/boomi/Exosphere.js';
import Crosschannel from './components/projects/iterable/Crosschannel.js';
import Messaginginsights from './components/projects/iterable/Messaginginsights.js';
import Reporting from './components/projects/15five/Reporting.js';


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/boomi_exosphere" element={<Exosphere />} />
          <Route path="/iterable_crosschannel" element={<Crosschannel />} />
          <Route path="/iterable_messaginginsights" element={<Messaginginsights />} />
          <Route path="/15five_reporting" element={<Reporting />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

