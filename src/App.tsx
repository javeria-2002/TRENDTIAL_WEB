import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import Team from './components/Team'; // Import Team Page
import "./styles/globals.css";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
