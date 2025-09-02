import React, { useState, useEffect, useRef } from 'react';
import { FaShareAlt, FaFacebook, FaWhatsapp, FaTelegram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const SocialShare = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleShareOptions = () => {
    setIsOpen(!isOpen);
  };
  
  // Handle clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentUrl = `${window.location.href}`;
  const message = "Try CircuitCure now and say goodbye to computer woes! #CircuitCure #ComputerRepair #TechnicianLocator";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(message)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(message)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%20${encodeURIComponent(currentUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(message)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(message)}`
  };

  return (
    <div className="social-share-container" ref={containerRef}>
      <div className="share-icon" onClick={toggleShareOptions}>
        <FaShareAlt />
      </div>
      {isOpen && (
        <div className="share-options">
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-option">
            <FaFacebook />
          </a>
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="share-option">
            <FaXTwitter />
          </a>
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="share-option">
            <FaWhatsapp />
          </a>
          <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="share-option">
            <FaTelegram />
          </a>
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="share-option">
            <FaLinkedin />
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
