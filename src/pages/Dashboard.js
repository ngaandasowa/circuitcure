import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaCog,
  FaHistory,
  FaTools,
  FaQuestionCircle,
} from 'react-icons/fa';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import DarkModeContext from '../DarkModeContext';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setUser(authUser);

        // Retrieve recent searches from localStorage
        const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        const activities = storedSearches.map((search, index) => {
          const formattedTimestamp = search.timestamp
            ? new Date(search.timestamp).toLocaleString()
            : 'Invalid Date';

          return {
            id: index,
            activity: `Searched for "${search.query}"`,
            timestamp: formattedTimestamp,
          };
        });

        setRecentActivities(activities);
      } else {
        setUser(null);
        setRecentActivities([]); // Clear recent activities if no user is logged in
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
      }`}
    >
      <div className="container mx-auto p-4 relative flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </div>
        {user ? (
          <>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Welcome, {user.displayName || user.email}!
              </h3>
              <p className="text-sm">
                Here you can find quick links to the main functionalities of CircuitCure and view recent activities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
              <div className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                darkMode ? 'bg-neutral-800' : 'bg-white'
              }`}>
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <FaUser className="mr-2" /> Profile Overview
                </h3>
                <p>Name: {user.displayName || 'N/A'}</p>
                <p>Email: {user.email}</p>
                <Link
                  to="/profile"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  Edit Profile
                </Link>
              </div>

              <div className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                darkMode ? 'bg-neutral-800' : 'bg-white'
              }`}>
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <FaHistory className="mr-2" /> Recent Activities
                </h3>
                <ul>
                  {recentActivities.length > 0 ? (
                    recentActivities.map((activity) => (
                      <li key={activity.id} className="mb-1">
                        {activity.activity} on {activity.timestamp}
                      </li>
                    ))
                  ) : (
                    <li>No recent activities.</li>
                  )}
                </ul>
              </div>

              <div className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                darkMode ? 'bg-neutral-800' : 'bg-white'
              }`}>
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <FaCog className="mr-2" /> Quick Links
                </h3>
                <div className="flex flex-col">
                  <Link
                    to="/diagnostics"
                    className="text-blue-500 hover:underline mb-2"
                  >
                    Run Diagnostics
                  </Link>
                  <Link
                    to="/technician-locator"
                    className="text-blue-500 hover:underline mb-2"
                  >
                    Find a Technician
                  </Link>
                  <Link
                    to="https://whatsapp.com/channel/0029VaNYndRId7nHQYQ75n2F"
                    className="text-blue-500 hover:underline mb-2"
                  >
                    Follow WhatsApp Channel
                  </Link>
                  <Link
                    to="/learning"
                    className="text-blue-500 hover:underline mb-2"
                  >
                    Learn About Computers
                  </Link>
                </div>
              </div>

              <div className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                darkMode ? 'bg-neutral-800' : 'bg-white'
              }`}>
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <FaTools className="mr-2" /> Device Performance
                </h3>
                <p>Feature under construction</p>
                <Link
                  to="/diagnostics"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  Run Full Diagnostic
                </Link>
              </div>

              <div className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                darkMode ? 'bg-neutral-800' : 'bg-white'
              }`}>
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <FaQuestionCircle className="mr-2" /> Notifications
                </h3>
                <p>No new notifications.</p>
              </div>

              <div className={`p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                darkMode ? 'bg-neutral-800' : 'bg-white'
              }`}>
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <FaCog className="mr-2" /> Tips and Recommendations
                </h3>
                <p>
                  Regularly clean your system to avoid overheating.
                </p>
                <p>
                  Consider upgrading your hard drive for better performance.
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center">Please log in to view your dashboard.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
