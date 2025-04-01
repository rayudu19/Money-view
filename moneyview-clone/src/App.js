import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Define your routes here for each section */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/credit-cards" element={<h1>Credit Cards</h1>} />
        <Route path="/loans" element={<h1>Loans</h1>} />
        <Route path="/insurance" element={<h1>Insurance</h1>} />
        <Route path="/emi-calculators" element={<h1>EMI Calculators</h1>} />
        <Route path="/credit-score" element={<h1>Credit Score</h1>} />
        <Route path="/blogs" element={<h1>Blogs</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
