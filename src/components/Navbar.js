import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import logo from './circuitcure-logo.png';
import DarkModeContext from '../DarkModeContext';
//import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  //const [voiceEnabled, setVoiceEnabled] = useState(true); // State for voice feature
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  //const toggleVoice = () => {
  //  setVoiceEnabled((prev) => !prev);
  //};

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
  
    if (!confirmLogout) {
      return; // Do nothing if the user cancels
    }
  
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      closeMenu();
      closeDropdown();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 font-extrabold ${
        darkMode ? 'bg-neutral-900' : 'bg-neutral-100'
      } shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 mr-2 transform transition-transform duration-500 hover:scale-110"
              onClick={(e) => {
                e.target.classList.add('animate-bounce');
                setTimeout(() => {
                  e.target.classList.remove('animate-bounce');
                }, 1000);
              }}
            />
          </Link>
        </div>

        <div className="flex lg:hidden items-center">
        <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} transition-all duration-300`}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
    </button>

       {/*  <button
            onClick={toggleVoice}
            className={`p-2 rounded-full ${voiceEnabled ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            {voiceEnabled ? <FaMicrophone className="text-lg" /> : <FaMicrophoneSlash className="text-lg" />}
          </button>*/}

          {user ? (
            <button
              onClick={handleLogout}
              className={`ml-4 mr-4 ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} focus:outline-none`}
              aria-label="Logout"
            >
              <FaSignOutAlt className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className={`ml-4 mr-4 ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} focus:outline-none`}              aria-label="Login"
            >
              <FaUser className="h-5 w-5" />
            </button>
          )}
          <button
            onClick={toggleMenu}
            className={`${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} focus:outline-none`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          } transition-transform duration-300`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className={`block mt-4 lg:inline-block lg:mt-0 ${
                location.pathname === '/' ? 'text-primary-500' : darkMode ? 'text-white' : 'text-black'
              } hover:text-blue-600 dark:hover:text-primary-300 transition-colors duration-300 mr-4`}
              
            >
              CircuitCure
            </Link>
            <Link
              to="/diagnostics"
              className={`block mt-4 lg:inline-block lg:mt-0 ${
                location.pathname === '/diagnostics' ? 'text-primary-500' : darkMode ? 'text-white' : 'text-black'
              } hover:text-blue-600 dark:hover:text-primary-300 transition-colors duration-300 mr-4`}
              
            >
              Diagnostics
            </Link>
            <Link
              to="/technician-locator"
              className={`block mt-4 lg:inline-block lg:mt-0 ${
                location.pathname === '/technician-locator' ? 'text-primary-500' : darkMode ? 'text-white' : 'text-black'
              } hover:text-blue-600 dark:hover:text-primary-300 transition-colors duration-300 mr-4`}
              
            >
              Technician Locator
            </Link>
            <div className="relative inline-block" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`inline-flex items-center mt-4 lg:mt-0 ${
                  darkMode ? 'text-white hover:text-primary-300' : 'text-black hover:text-blue-600'
                } transition-colors duration-300`}
                
              >
                <span>Fix Everything</span>
                <svg
                  className={`fill-current h-5 w-5 ml-2 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 9.293l4.707 4.707 4.707-4.707-1.414-1.414L10 11.586 6.707 7.879z" />
                </svg>
              </button>
              <ul
  className={`absolute left-0 mt-2 py-2 w-48 rounded-lg shadow-xl z-20 transition-opacity duration-300 ${
    darkMode ? 'bg-gray-100  text-black' : 'bg-neutral-700 text-white'
  } ${isDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
>
  <li>
    <Link
      to="/learning"
      className={`block px-4 py-2 transition-colors duration-300 ${
        darkMode ? 'hover:bg-neutral-600' : 'hover:bg-gray-200'
      } ${location.pathname === '/learning' ? 'text-primary-500' : ''}`}
    >
      Learning
    </Link>
  </li>
  <li>
    <Link
      to="/legal"
      className={`block px-4 py-2 transition-colors duration-300 ${
        darkMode ? 'hover:bg-neutral-600' : 'hover:bg-gray-200'
      } ${location.pathname === '/legal' ? 'text-primary-500' : ''}`}
    >
      Legal
    </Link>
  </li>
  <li>
    <Link
      to="/profile"
      className={`block px-4 py-2 transition-colors duration-300 ${
        darkMode ? 'hover:bg-neutral-600' : 'hover:bg-gray-200'
      } ${location.pathname === '/profile' ? 'text-primary-500' : ''}`}
    >
      Your Profile
    </Link>
  </li>
</ul>

            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
          <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} transition-all duration-300`}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
    </button>

    {user ? (
            <button
              onClick={handleLogout}
              className={`ml-4 mr-4 ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} focus:outline-none`}
              aria-label="Logout"
            >
              <FaSignOutAlt className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className={`ml-4 mr-4 ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} focus:outline-none`}              aria-label="Login"
            >
              <FaUser className="h-5 w-5" />
            </button>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
