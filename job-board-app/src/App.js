import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobDetails from './pages/JobDetails';
import CompanyDashboard from './pages/CompanyDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/dashboard" element={<CompanyDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;