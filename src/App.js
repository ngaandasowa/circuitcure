import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import IssueDetail from './pages/IssueDetail';
import TechnicianLocator from './pages/TechnicianLocator';
import Legal from './pages/Legal';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; 
import Diagnostics from './pages/Diagnostics'; 
import Learning from './pages/Learning';
import Forum from './pages/Forum'; 
import 'leaflet/dist/leaflet.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Disclaimer from './components/Disclaimer';
import { DarkModeProvider } from './DarkModeContext';
import SocialShare from './components/SocialShare';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen mt-16">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/technician-locator" element={<TechnicianLocator />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/issue/:id" element={<IssueDetail />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
          <SocialShare />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
