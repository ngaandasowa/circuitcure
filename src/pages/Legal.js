import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaFileContract, FaCookieBite, FaExclamationTriangle } from 'react-icons/fa'; // Importing icons
import DarkModeContext from '../DarkModeContext';


function Legal() {
  const { darkMode } = useContext(DarkModeContext); // Access context
  return (
    <div className={`w-full h-full min-h-screen ${
      darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
    } transition-colors duration-500`}>

<div className="container mx-auto p-4">  
      <h1 className="text-3xl font-bold mb-6">Legal</h1>
      <p className="mb-6">The following are the legal documents for this app.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/privacy-policy" className={`legal-card ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}>
          <FaShieldAlt className="text-4xl mb-2 text-blue-500" />
          <h2 className="text-xl font-semibold">Privacy Policy</h2>
        </Link>
        <Link to="/terms-of-service" className={`legal-card ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}>
          <FaFileContract className="text-4xl mb-2 text-green-500" />
          <h2 className="text-xl font-semibold">Terms of Service</h2>
        </Link>
        <Link to="/cookie-policy" className={`legal-card ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}>
          <FaCookieBite className="text-4xl mb-2 text-yellow-500" />
          <h2 className="text-xl font-semibold">Cookie Policy</h2>
        </Link>
        <Link to="/disclaimer" className={`legal-card ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}>
          <FaExclamationTriangle className="text-4xl mb-2 text-red-500" />
          <h2 className="text-xl font-semibold">Disclaimer</h2>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Legal;
