import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import { issues } from '../data/issues';
import { speakText } from '../utils/speech';
import DarkModeContext from '../DarkModeContext';
import { FaWhatsapp, FaGlobe, FaSearch, FaVolumeUp, FaVolumeMute, FaCog } from 'react-icons/fa';

const nicknameWarnings = [
  "Oops! First things first—what's your nickname?",
  "Hold on! I need to know your nickname before I can help.",
  "No nickname, no search! What should I call you?",
  "I’d love to help, but I need a nickname first!",
  "Before we fix computers, let’s fix this… What’s your nickname?"
];

const filterResults = (results) => {
  return results.filter(result => {
    const relevantKeywords = ['anti-virus', 'virus', 'antivirus', 'computer', 'technology', 'software', 'hardware', 'refurbished', 'brand new', 'boxed', 'preowned', 'renewed', 'bios', 'repair', 'fixed', 'solved', 'stuck', 'restart', 'os', 'mac', 'windows 10', 'windows 11', 'windows 7', 'ubuntu', 'linux', 'operating system', 'screen', 'size', 'auto repair', 'pc', 'desktop', 'laptop', 'server', 'troubleshooting', 'drivers'];
    return relevantKeywords.some(keyword => result.title.includes(keyword) || result.snippet.includes(keyword));
  });
};

const fetchGoogleResults = async (query) => {
  const apiKey = 'AIzaSyCFbrH6CqJywAWkdY-B4ZUho6Ox8hIphmI';
  const cx = '40ca7d6edb3594643';
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

  const response = await fetch(url);
  const data = await response.json();
  const filteredResults = filterResults(data.items || []);
  return filteredResults;
};

const debouncedSearch = debounce(async (query, setResults, fuse, speechEnabled, voiceSettings) => {
  if (query) {
    const result = fuse.search(query);
    if (result.length > 0) {
      setResults(result.map(r => r.item));
      if (speechEnabled) {
        speakText(`Found ${result.length} results for ${query}`, voiceSettings);
      }
    } else {
      const googleResults = await fetchGoogleResults(query);
      setResults(googleResults.map(item => ({
        id: item.link,
        title: item.title,
        description: item.snippet,
        isGoogleResult: true
      })));
      if (speechEnabled) {
        speakText(`Found ${googleResults.length} web results for ${query}`, voiceSettings);
      }
    }
  } else {
    setResults([]);
  }
}, 800);

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [nickname, setNickname] = useState('');
  const [isNicknameSet, setIsNicknameSet] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(localStorage.getItem('speechEnabled') === 'true' || false);
  const [voiceSettings, setVoiceSettings] = useState({
    voice: null,
    speed: 1,
    volume: 1,
  });
  const [showSettings, setShowSettings] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const fuse = new Fuse(issues, { keys: ['title', 'description'], includeScore: true });

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
      setIsNicknameSet(true);
    }
  }, []);

  useEffect(() => {
    // Initialize speechEnabled from localStorage or default to false
    const storedSpeechEnabled = localStorage.getItem('speechEnabled');
    if (storedSpeechEnabled === null) {
      localStorage.setItem('speechEnabled', false); // Set to false if no value exists
    }
  }, []);
  
  useEffect(() => {
    // Save speechEnabled to localStorage whenever it changes
    localStorage.setItem('speechEnabled', speechEnabled);
  }, [speechEnabled]);

  useEffect(() => {
    if (isNicknameSet) {
      const fullText = `Hello ${nickname}! Welcome to CircuitCure, your solution to every computer issue.`;
      setDisplayedText('');
      let index = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(prev => {
          if (index >= fullText.length) {
            clearInterval(typingInterval);
            return fullText;
          }
          return prev + fullText[index];
        });
        index++;
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [isNicknameSet, nickname]);

  const handleInputChange = (e) => {
    if (!isNicknameSet) {
      alert(nicknameWarnings[Math.floor(Math.random() * nicknameWarnings.length)]);
      return;
    }
    setQuery(e.target.value);
    debouncedSearch(e.target.value, setResults, fuse, speechEnabled, voiceSettings);
  };

  const handleNicknameSubmit = () => {
    if (!nickname.trim()) {
      alert("Please enter a valid nickname!");
      return;
    }
    localStorage.setItem('nickname', nickname);
    setIsNicknameSet(true);
  };

  const handleSearch = () => {
    if (query) {
      const updatedSearches = [query, ...recentSearches.filter(search => search !== query)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      setHasSearched(true);
      debouncedSearch(query, setResults, fuse, speechEnabled, voiceSettings);
    }
  };

  const handleExternalLinkClick = (e, url) => {
    e.preventDefault();
    if (window.confirm("You are now opening an external link. Do you want to proceed?")) {
      window.open(url, '_blank');
    }
  };

  const clearRecentSearch = (search) => {
    const updatedSearches = recentSearches.filter(item => item !== search);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const updateVoiceSettings = (newSettings) => {
    setVoiceSettings({ ...voiceSettings, ...newSettings });
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen ${
        darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
      } overflow-hidden transition-colors duration-500`}
    >
      {/* Speech Toggle and Settings */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        <button
          onClick={() => setSpeechEnabled(!speechEnabled)}
          className="text-2xl text-primary-500"
          title={speechEnabled ? "Mute Speech" : "Enable Speech"}
        >
          {speechEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
        <button
          onClick={() => setShowSettings(true)}
          className="text-2xl text-primary-500"
          title="Speech Settings"
        >
          <FaCog />
        </button>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-neutral-800' : 'bg-white'}`}>
            <h2 className="text-xl mb-4">Speech Settings</h2>
            <label className="block mb-4">
              Voice:
              <select
                value={voiceSettings.voice || ''}
                onChange={(e) => updateVoiceSettings({ voice: e.target.value })}
                className={`ml-2 p-1 ${darkMode ? 'bg-neutral-700 text-neutral-100' : 'bg-neutral-200 text-neutral-900'}`}
              >
                {window.speechSynthesis.getVoices().map((voice, index) => (
                  <option key={index} value={voice.name}>
                    {voice.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block mb-4">
              Speed:
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={voiceSettings.speed}
                onChange={(e) => updateVoiceSettings({ speed: parseFloat(e.target.value) })}
                className="ml-2"
              />
              <span className="ml-2">{voiceSettings.speed}x</span>
            </label>
            <label className="block mb-4">
              Volume:
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={voiceSettings.volume}
                onChange={(e) => updateVoiceSettings({ volume: parseFloat(e.target.value) })}
                className="ml-2"
              />
              <span className="ml-2">{Math.round(voiceSettings.volume * 100)}%</span>
            </label>
            <button
              onClick={() => setShowSettings(false)}
              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {!isNicknameSet ? (
        <div className="z-10 text-center">
          <h1 className="text-2xl mb-4">What&apos;s your nickname?</h1>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={`p-2 border rounded mb-4 w-full max-w-md ${ darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-200 text-neutral-800'}`}
            placeholder="Enter your nickname..."
          />
          <button
            onClick={handleNicknameSubmit}
            className={`${ darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} px-4 py-2 rounded hover:bg-primary-600 transition-colors duration-300`}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center z-10 w-full max-w-lg">
          <div className="typing-container mx-auto">
            <span className="typing-text">{displayedText}</span>
            <span className="typing-cursor">|</span>
          </div>
        </div>
      )}

<div className="relative w-full max-w-lg px-4 z-10 mt-6">
  <div className="relative flex items-center">
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      className={`w-full p-4 pr-28 rounded-lg ${
        darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'
      } focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300`}
      placeholder="Describe your issue..."
    />
    <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2">
      {query && ( // Conditionally render the Clear button
        <button
          className="flex items-center justify-center w-8 h-8 hover:text-primary-600 transition-all duration-300"
          onClick={() => setQuery('')}
          title="Clear"
        >
          ✖
        </button>
      )}
      <button
        className="flex items-center justify-center w-8 h-8 hover:text-primary-600 transition-all duration-300"
        onClick={handleSearch}
        title="Search"
      >
        <FaSearch size={20} />
      </button>
      <button
        className="flex items-center justify-center w-8 h-8 hover:text-primary-600 transition-all duration-300"
        onClick={async () => {
          if (query) {
            const googleResults = await fetchGoogleResults(query);
            setResults(
              googleResults.map((item) => ({
                id: item.link,
                title: item.title,
                description: item.snippet,
                isGoogleResult: true,
              }))
            );
            speakText(`Found ${googleResults.length} web results for ${query}`);
          }
        }}
        title="Search Google"
      >
        <FaGlobe size={20} />
      </button>
    </div>
  </div>

  {recentSearches.length > 0 && (
    <ul className="mt-2 list-none p-0">
      {recentSearches.slice(0, 5).map((search, index) => (
        <li
          key={index}
          className={`flex items-center justify-between mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
        >
          <span
            onClick={() => setQuery(search)}
            className="cursor-pointer hover:underline"
          >
            {search}
          </span>
          <button
            onClick={() => clearRecentSearch(search)}
            className="text-red-500 hover:text-red-700"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  )}
</div>


      <div className="w-full max-w-lg px-4 mt-6 z-10">
        {results.length > 0 && (
          <ul className="list-none p-0">
            {results.map((issue) => (
              <li
                key={issue.id}
                className={`mb-4 p-4 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 ${
                  darkMode ? 'bg-neutral-800' : 'bg-white'
                }`}
              >
               
                {issue.isGoogleResult ? (
                  <a
                    href={issue.id}
                    onClick={(e) => handleExternalLinkClick(e, issue.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="text-xl font-semibold">{issue.title}</h2>
                    <p className="hover:underline">{issue.description}</p>
                    {issue.isGoogleResult && (
                  <p className="text-sm">Result from Web</p>
                )}
                  </a>
                ) : (
                  <>                    
                  <a
                    href={`/issue/${issue.id}`}
                    ><h2 className="text-xl font-semibold">{issue.title}</h2>                                       
                    <p>{issue.sub_description}</p>
                  </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
        {hasSearched && results.length === 0 && (
          <div className="text-center mt-6">
            <p>No results found.</p>
            <a href="https://wa.me/263783827570?text=Hello%20Ngaavongwe" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mt-4 text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg">
              <FaWhatsapp className="mr-2" />
              Contact Us on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
