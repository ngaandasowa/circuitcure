import React, { useState, useContext, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { issues } from '../data/issues';
import { FaVolumeUp, FaPause, FaVideo, FaClock, FaDownload, FaLink, FaSignInAlt } from 'react-icons/fa';
import DarkModeContext from '../DarkModeContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function IssueDetail() {
  const { id } = useParams();
  const issue = issues.find(issue => issue.id === parseInt(id));
  const textContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const [showVideo, setShowVideo] = useState(false);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  // Check user authentication status
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Update login status
      setShowFullContent(!!user); // Show full content if logged in
    });

    return () => unsubscribe();
  }, []);

  const handlePlayPauseAudio = () => {
    if (isPlaying) {
      synthRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!utteranceRef.current) {
        startReading();
      } else {
        synthRef.current.resume();
        setIsPlaying(true);
      }
    }
  };

  const startReading = () => {
    const textContent = stripHTML(issue.description);
    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.voice = null;
    utteranceRef.current = utterance;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      utteranceRef.current = null;
    };

    window.speechSynthesis.cancel();
    synthRef.current.speak(utterance);
  };

  const stripHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const handleWatchVideo = () => {
    setShowVideo(!showVideo);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        synthRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  if (!issue) {
    return <div className="text-white">Issue not found</div>;
  }

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 p-4 ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'}`}>
      <div className={`w-full max-w-4xl ${darkMode ? 'bg-neutral-800 text-neutral-100' : 'bg-white text-neutral-900'} p-6 rounded-lg shadow-lg`}>
        <h1 className="text-3xl font-bold mb-4">{issue.title}</h1>

        {/* Show Partial Content if not logged in */}
        <div className="max-h-96 overflow-y-auto">
          {showFullContent ? (
            <div className={`prose prose-lg ${darkMode ? 'text-neutral-100' : 'text-neutral-900'}`} ref={textContainerRef} dangerouslySetInnerHTML={{ __html: issue.description }}></div>
          ) : (
            <div>
              <p>{stripHTML(issue.description).slice(0, 200)}...</p> {/* Show only a preview */}
              <p className="text-primary-500 cursor-pointer" onClick={() => setShowFullContent(true)}>
                {isLoggedIn ? 'Read More' : 'Login to Read More'}
              </p>
            </div>
          )}
        </div>

        {/* Show additional details if user is logged in */}
        {showFullContent && (
          <>

            {/* Estimated Reading Time */}
            {issue.description && (
              <div className="mb-6 flex items-center">
                <FaClock className="mr-2 text-primary-500" />
                <p className="text-primary-500">Estimated reading time: {getEstimatedReadingTime(issue.description)} minutes</p>
              </div>
            )}

            {/* Download Button */}
            {issue.zipUrl && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Download Setup</h2>
                <a
                  href={issue.zipUrl}
                  className="flex items-center justify-center text-white bg-primary-500 p-3 rounded-lg border border-primary-500 hover:bg-primary-600 transition-all duration-300 animate-bounce"
                  download
                >
                  <FaDownload className="mr-2" />
                  Download Now
                </a>
              </div>
            )}

            {/* Additional Links */}
            {issue.link && (
                <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Additional Links</h2>
                <a
                  href={issue.link}
                  className="flex items-center justify-center text-white bg-primary-500 p-3 rounded-lg border border-primary-500 hover:bg-primary-600 transition-all duration-300"
                  download
                >   
                  <FaLink className="mr-2" />
                  Visit Now
                </a>
                </div>
            )}

            {/* Watch Video */}
            {issue.videoUrl && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Watch Video</h2>
                <button
                  onClick={handleWatchVideo}
                  className="flex items-center text-primary-500 hover:underline p-2 rounded-lg border border-neutral-300 hover:border-primary-500 transition-all duration-300"
                >
                  <FaVideo className="mr-2" />
                  {showVideo ? 'Hide Video' : 'Watch Video'}
                </button>

                {showVideo && (
                  <div className="mt-4 relative pb-[56.25%] h-0 overflow-hidden">
                    <iframe
                      src={issue.videoUrl}
                      title="Issue Video"
                      frameBorder="0"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                )}
              </div>
            )}

            {/* Listen to Description */}
            {issue.description && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Listen to Description</h2>
                <button
                  onClick={handlePlayPauseAudio}
                  className="flex items-center text-primary-500 hover:underline p-2 rounded-lg border border-neutral-300 hover:border-primary-500 transition-all duration-300"
                >
                  {isPlaying ? <FaPause className="mr-2" /> : <FaVolumeUp className="mr-2" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            )}
          </>
        )}

        {/* Login Button if not logged in */}
        {!isLoggedIn && (
          <div className="mt-6">
            <a
              href="/login" // Replace with your actual login route
              className="flex items-center text-white bg-primary-500 p-3 rounded-lg border border-primary-500 hover:bg-primary-600 transition-all duration-300"
            >
              <FaSignInAlt className="mr-2" />
              Login to Read Full Content
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function getEstimatedReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default IssueDetail;
