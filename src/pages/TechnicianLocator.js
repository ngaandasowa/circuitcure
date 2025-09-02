import React, { useState, useEffect, useRef, useContext } from 'react';
import { technicians } from '../data/technicians';
import { getDistance, convertDistance } from 'geolib';
import { FaArrowUp, FaArrowDown, FaStar } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import DarkModeContext from '../DarkModeContext';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function TechnicianLocator() {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyTechnicians, setNearbyTechnicians] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState({});
  const [newReview, setNewReview] = useState({ rating: '', comment: '' });
  const [locationError, setLocationError] = useState(null);
  const { darkMode } = useContext(DarkModeContext); // Access context

  const detailsRef = useRef(null);
  const listRef = useRef(null);

  // Function to fetch nearby technicians
  const fetchTechnicians = (latitude, longitude) => {
    const maxDistance = 2000; // Maximum distance in meters (2 kilometers)
    const techniciansWithDistance = technicians
      .map((tech) => {
        const distance = getDistance(
          { latitude, longitude },
          { latitude: tech.location.lat, longitude: tech.location.lng }
        );

        return { ...tech, distance };
      })
      .filter((tech) => tech.distance <= maxDistance); // Filter by maximum distance

    techniciansWithDistance.sort((a, b) => a.distance - b.distance);
    setNearbyTechnicians(techniciansWithDistance);
    setLoading(false);
  };

  // Function to calculate rating for each technician
  const calculateRating = (techId) => {
    const techReviews = reviews[techId] || [];
    const numRatings = techReviews.length;
    const averageRating =
      techReviews.reduce((acc, review) => acc + parseInt(review.rating), 0) /
        numRatings || 0;
    return { averageRating, numRatings };
  };

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        fetchTechnicians(latitude, longitude);
        setLocationError(null);
      },
      (error) => {
        console.error(error);
        setLoading(false);
        setLocationError(
          'Location permission is required to find nearby technicians. Please enable location services.'
        );
      },
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const handleTechnicianClick = (technician) => {
    setSelectedTechnician(technician);
    setNewReview({ rating: '', comment: '' });

    // Scroll to technician details
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToBottom = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const { rating, comment } = newReview;
    if (rating && comment && selectedTechnician) {
      setReviews((prevReviews) => {
        const techReviews = prevReviews[selectedTechnician.id] || [];
        return {
          ...prevReviews,
          [selectedTechnician.id]: [...techReviews, { rating, comment }],
        };
      });
      setNewReview({ rating: '', comment: '' });
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen w-full ${
        darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
      } p-4 transition-colors duration-500`}
    >
      <div className="w-full max-w-4xl mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Technician Locator</h1>
      </div>
      {locationError && (
        <div className="text-red-500 mb-4">
          <p>{locationError}</p>
          <h3 className="text-xl font-semibold mt-2">
            How to enable location permissions:
          </h3>
          <ul className="list-disc ml-6">
            <li>
              On <strong>Chrome (Desktop)</strong>: Click the lock icon in the
              address bar and set Location to "Allow".
            </li>
            <li>
              On <strong>Safari (iPhone)</strong>: Go to Settings &gt; Privacy
              &gt; Location Services and enable location access for Safari.
            </li>
            <li>
              On <strong>Android</strong>: Go to Settings &gt; Apps &gt; CircuitCure &gt; Permissions and enable Location.
            </li>
            <li>
              On <strong>iOS App</strong>: Go to Settings &gt; CircuitCure
              &gt; Location and set it to "While Using the App".
            </li>
          </ul>
        </div>
      )}
      <button
        className="mb-4 bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
        onClick={() => {
          if (userLocation) {
            fetchTechnicians(userLocation.lat, userLocation.lng);
          }
        }}
      >
        Refresh Location
      </button>
      {!userLocation ? (
        <p>Loading your location...</p>
      ) : (
        <div className="w-full max-w-4xl flex flex-col gap-4">
          <div className="w-full bg-white dark:bg-neutral-800 text-black dark:text-neutral-100 p-6 rounded-lg shadow-lg mb-6">
            {selectedTechnician && (
              <div ref={detailsRef} className="animate__animated animate__fadeIn">
                <h2 className="text-2xl font-semibold mb-4">Technician Details</h2>
                <p>Name: {selectedTechnician.name}</p>
                <p>Description: {selectedTechnician.description}</p>
                <p>Contact: {selectedTechnician.contact}</p>
                <p>
                  Website:{' '}
                  <a
                    href={selectedTechnician.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {selectedTechnician.website}
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${selectedTechnician.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {selectedTechnician.email}
                  </a>
                </p>
                <p>
                  Distance:{' '}
                  {convertDistance(selectedTechnician.distance, 'km').toFixed(
                    2
                  )}{' '}
                  km away
                </p>

                <h3 className="text-xl font-semibold mt-4">Reviews</h3>
                {reviews[selectedTechnician.id] ? (
                  <ul className="list-none p-0 m-0">
                    {reviews[selectedTechnician.id].map((review, index) => (
                      <li key={index} className="border-b border-gray-300 py-2">
                        <p>
                          Rating: <FaStar className={`inline text-yellow-500`} />{' '}
                          {review.rating}
                        </p>
                        <p>Comment: {review.comment}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No reviews yet.</p>
                )}

                <h3 className="text-xl font-semibold mt-4">Add a Review</h3>
                <form onSubmit={handleReviewSubmit} className="flex flex-col">
                  <label className="mb-2">
                    Rating:
                    <select
                      className="ml-2 p-1 rounded border border-gray-300 dark:bg-neutral-700"
                      value={newReview.rating}
                      onChange={(e) =>
                        setNewReview({ ...newReview, rating: e.target.value })
                      }
                    >
                      <option value="">Select Rating</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </label>
                  <label className="mb-2">
                    Comment:
                    <textarea
                      className="ml-2 p-1 rounded border border-gray-300 dark:bg-neutral-700"
                      value={newReview.comment}
                      onChange={(e) =>
                        setNewReview({ ...newReview, comment: e.target.value })
                      }
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}
            <div ref={listRef} className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Nearby Technicians</h2>
              {loading ? (
                <p>Loading technicians...</p>
              ) : nearbyTechnicians.length > 0 ? (
                <>
                  <ul className="list-none p-0 m-0">
                    {nearbyTechnicians.map((technician) => {
                      const { averageRating, numRatings } = calculateRating(
                        technician.id
                      );
                      return (
                        <li
                          key={technician.id}
                          className="cursor-pointer mb-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all duration-300"
                          onClick={() => handleTechnicianClick(technician)}
                        >
                          <h3 className="text-xl font-semibold">{technician.name}</h3>
                          <p>Description: {technician.description}</p>
                          <p>
                            Location:{' '}
                            {convertDistance(technician.distance, 'km').toFixed(2)} km
                            away
                          </p>
                          <p>Contact: {technician.contact}</p>
                          <p>
                            Rating: <FaStar className={`inline text-yellow-500`} />{' '}
                            {averageRating.toFixed(1)} ({numRatings} ratings)
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handleScrollToTop}
                      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      onClick={handleScrollToBottom}
                      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                      <FaArrowDown />
                    </button>
                  </div>
                </>
              ) : (
                <p>
                  No nearby technicians found.{' '}
                  <a
                    href="tel:+263782676193"
                    className="text-blue-500 hover:underline"
                  >
                    Contact Ngaatec
                  </a>{' '}
                  directly for assistance.
                </p>
              )}
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <MapContainer
              center={userLocation}
              zoom={15}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {userLocation && (
                <>
                  <Marker position={userLocation}>
                    <Popup>Your Location</Popup>
                  </Marker>
                  <Circle
                    center={userLocation}
                    radius={3000} // Radius of 3 km to show the area
                    pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1 }}
                  />
                </>
              )}
              {nearbyTechnicians.map((tech) => (
                <Marker
                  key={tech.id}
                  position={[tech.location.lat, tech.location.lng]}
                >
                  <Popup>
                    <div>
                      <strong>{tech.name}</strong>
                      <p>
                        Distance: {convertDistance(tech.distance, 'km').toFixed(2)} km
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleScrollToTop}
              className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              Scroll to List <FaArrowUp />
            </button>
            <button
              onClick={handleScrollToBottom}
              className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              Scroll to Details <FaArrowDown />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechnicianLocator;
