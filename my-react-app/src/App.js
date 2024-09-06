import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ReplitBackEnd from './components/ReplitBackEnd';  // Import ReplitBackEnd

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/replit-backend" element={<ReplitBackEnd />} /> {/* Add ReplitBackEnd route */}
      </Routes>
    </Router>
  );
};

export default App;


