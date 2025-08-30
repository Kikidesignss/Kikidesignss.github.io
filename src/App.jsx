import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';  // your global styles here
import KDT from "./pages/KDT"

import Home from './pages/Home';
import AboutSkillsProjects from './pages/AboutSkillsProjects';
import EndPage from './pages/EndPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<AboutSkillsProjects />} />
        <Route path="/kdt" element={<KDT />} /> 
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </Router>
  );
}