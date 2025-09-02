import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const VoiceSearch = ({ onSearch, voiceEnabled }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    const recognitionInstance = new window.webkitSpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onSearch(transcript);
      setIsListening(false);
    };

    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    setRecognition(recognitionInstance);
  }, [onSearch]);

  const handleStartListening = () => {
    if (recognition && voiceEnabled) {
      recognition.start();
      setIsListening(true);
    }
  };

  const handleStopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="flex items-center mt-4">
      <button
        onClick={isListening ? handleStopListening : handleStartListening}
        disabled={!voiceEnabled}
        className={`px-4 py-2 rounded ${isListening ? 'bg-red-500' : 'bg-green-500'} text-white ${
          !voiceEnabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isListening ? 'Stop Listening' : 'Start Voice Search'}
      </button>
    </div>
  );
};

// Add prop type validation
VoiceSearch.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch is a required function
  voiceEnabled: PropTypes.bool.isRequired, // voiceEnabled is a required boolean
};

export default VoiceSearch;
