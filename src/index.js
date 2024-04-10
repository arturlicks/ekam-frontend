import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Calendar } from './pages/Calendar';
import "./styles.css"
import UploadResults from './pages/UploadResults';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/upload" element={<UploadResults />} />
      </Routes>
    </Router>
  </React.StrictMode>
);