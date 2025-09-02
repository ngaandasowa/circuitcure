import React, { useContext } from 'react';
import {
  FaLaptop,
  FaChalkboardTeacher,
  FaVideo,
  FaQuestionCircle,
  FaBook,
  FaChartLine,
} from 'react-icons/fa';
import DarkModeContext from '../DarkModeContext'; // Import context

function Learning() {
  const { darkMode } = useContext(DarkModeContext); // Access context

  // Function to show under development message
  const showUnderDevelopmentMessage = () => {
    alert("This feature is still under construction. 🚧 Please check back later!");
  };

  return (
    <div
      className={`w-full h-full min-h-screen ${
        darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
      } transition-colors duration-500`}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Learning Hub</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Learning Paths */}
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}
          >
            <FaLaptop
              className={`text-4xl mb-4 transition-colors duration-500 ${
                darkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            />
            <h2 className="text-xl font-semibold mb-2">Learning Paths</h2>
            <p>Guided courses from beginner to advanced.</p>
            <button 
              className="mt-4 bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-all duration-300"
              onClick={showUnderDevelopmentMessage} // Adding click handler
            >
              Explore Paths
            </button>
          </div>

          {/* Interactive Tutorials */}
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}
          >
            <FaChalkboardTeacher
              className={`text-4xl mb-4 transition-colors duration-500 ${
                darkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            />
            <h2 className="text-xl font-semibold mb-2">Interactive Tutorials</h2>
            <p>Hands-on guides and simulations.</p>
            <button
              className="mt-4 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300"
              onClick={showUnderDevelopmentMessage} // Adding click handler
            >
              Start Learning
            </button>
          </div>

          {/* Quizzes and Certifications */}
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}
          >
            <FaChartLine
              className={`text-4xl mb-4 transition-colors duration-500 ${
                darkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            />
            <h2 className="text-xl font-semibold mb-2">Quizzes & Certifications</h2>
            <p>Assessments to test your knowledge.</p>
            <button
              className="mt-4 bg-yellow-500 text-neutral-900 p-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
              onClick={showUnderDevelopmentMessage} // Adding click handler
            >
              Take a Quiz
            </button>
          </div>

          {/* Videos and Multimedia */}
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}
          >
            <FaVideo
              className={`text-4xl mb-4 transition-colors duration-500 ${
                darkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            />
            <h2 className="text-xl font-semibold mb-2">Videos & Multimedia</h2>
            <p>Visual content to enhance learning.</p>
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
              onClick={showUnderDevelopmentMessage} // Adding click handler
            >
              Watch Videos
            </button>
          </div>

          {/* Community and Support */}
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}
          >
            <FaQuestionCircle
              className={`text-4xl mb-4 transition-colors duration-500 ${
                darkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            />
            <h2 className="text-xl font-semibold mb-2">Community & Support</h2>
            <p>Join forums and mentorship programs.</p>
            <button
              className="mt-4 bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition-all duration-300"
              onClick={showUnderDevelopmentMessage} // Adding click handler
            >
              Join Now
            </button>
          </div>

          {/* Resource Library */}
          <div
            className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}
          >
            <FaBook
              className={`text-4xl mb-4 transition-colors duration-500 ${
                darkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            />
            <h2 className="text-xl font-semibold mb-2">Resource Library</h2>
            <p>Articles, eBooks, and tools.</p>
            <button
              className="mt-4 bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
              onClick={showUnderDevelopmentMessage} // Adding click handler
            >
              Explore Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
