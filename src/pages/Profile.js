import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { auth, storage } from '../firebaseConfig'; // Ensure you have Firebase Storage imported
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { FaEdit, FaSignOutAlt, FaCamera, FaTachometerAlt } from 'react-icons/fa'; // Import icons
import DarkModeContext from '../DarkModeContext';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const navigate = useNavigate(); // Initialize navigate
  const { darkMode } = useContext(DarkModeContext); // Access context

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setDisplayName(currentUser.displayName || '');
      setPhotoURL(currentUser.photoURL || '');
    } else {
      setUser(null);
    }
  }, []);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = async () => {
    try {
      if (user) {
        if (photoFile) {
          const storageRef = ref(storage, `profilePhotos/${user.uid}`);
          await uploadBytes(storageRef, photoFile);
          const photoURL = await getDownloadURL(storageRef);
          await user.updateProfile({
            displayName,
            photoURL
          });
          setPhotoURL(photoURL);
        } else {
          await user.updateProfile({
            displayName
          });
        }
        setEditMode(false);
      }
    } catch (err) {
      setError(err.message);
    }
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
  

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  if (!user) {
    return (
      <div className={`w-full h-full min-h-screen ${
        darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
      } transition-colors duration-500`}>
        <div className="relative flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Your Profile</h2>
        <a 
        href="/login"
        >
        <p className="text-red-500 hover:underline">Please log in to view your profile.</p>
        </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full min-h-screen ${
      darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
    } transition-colors duration-500`}>

<div className="container mx-auto p-4">  
      <h2 className="text-3xl font-bold mb-4">Your Profile</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className={`p-6 rounded-lg shadow-lg ${
              darkMode ? 'bg-neutral-800' : 'bg-white'
            }`}>
 <div className="flex flex-col items-center mb-4">
  <div className="relative">
    <img
      src={photoURL || 'https://via.placeholder.com/150'}
      alt="Profile"
      className="h-24 w-24 rounded-full object-cover border-2 border-gray-300"
    />
    <label
      htmlFor="photoUpload"
      className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full cursor-pointer transform translate-x-1/2 translate-y-1/2"
    >
      <FaCamera className="text-gray-600" />
      <input
        id="photoUpload"
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
      />
    </label>
  </div>
  <p className="mt-4 text-xl font-semibold text-center">{user.displayName || 'No Name'}</p>
  <p className="text-lg text-center">{user.email}</p>
  {user.phoneNumber && <p className="text-lg text-center">{user.phoneNumber}</p>}
</div>


        <button
          onClick={handleEdit}
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          <FaEdit className="mr-2" />
          {editMode ? 'Cancel' : 'Edit Profile'}
        </button>
        {editMode && (
          <div className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        )}
        
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
        
        <button
          onClick={() => navigate('/dashboard')} // Navigate to the dashboard page
          className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center"
        >
          <FaTachometerAlt className="mr-2" />
          View My Dashboard
        </button>
      </div>
      </div>
    </div>
  );
};

export default Profile;
