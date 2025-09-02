import React, { useState, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import DarkModeContext from '../DarkModeContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isPhoneAuth, setIsPhoneAuth] = useState(false);
  const [error, setError] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (isPhoneAuth) {
      try {
        const recaptchaVerifier = new window.recaptchaVerifier('recaptcha-container', {}, auth);
        const result = await auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
        setConfirmationResult(result);
        
      } catch (err) {
        setError(err.message);
      }
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirmationResult.confirm(verificationCode);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`w-full h-full min-h-screen ${
      darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'
    } transition-colors duration-500`}>
      <div className="container mx-auto p-4 max-w-md items-center text-center">
      <h2 className="text-3xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className={`block text-sm ${
               darkMode ? 'text-white' : 'text-neutral-900'
               } font-medium`}>
            {isPhoneAuth ? 'Phone Number' : 'Email'}
          </label>
          <input
            type={isPhoneAuth ? 'tel' : 'email'}
            className={`mt-1 block w-full ${
              darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
          } p-2 border rounded-lg`}
            value={isPhoneAuth ? phoneNumber : email}
            onChange={(e) => isPhoneAuth ? setPhoneNumber(e.target.value) : setEmail(e.target.value)}
          />
        </div>
        {!isPhoneAuth && (
          <div>
            <label className={`block text-sm ${
                 darkMode ? 'text-white' : 'text-neutral-900'
                 } font-medium`}>Password</label>
            <input
              type="password"
              className={`mt-1 block w-full ${
                darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
              } p-2 border rounded-lg`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
        {isPhoneAuth && (
          <div>
            <label className={`block text-sm ${
                 darkMode ? 'text-white' : 'text-neutral-900'
                 } font-medium`}>Verification Code</label>
            <input
              type="text"
              className={`mt-1 block w-full ${
                darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
              } p-2 border rounded-lg`}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button type="button" onClick={handleVerifyCode} className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
              Verify Code
            </button>
          </div>
        )}
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
          Register
        </button>
      </form>
      <div className="mt-4 space-y-2">
        <button
          onClick={() => handleSocialLogin(googleProvider)}
          className="flex items-center justify-center w-full p-2 border rounded-lg"
        >
          <FaGoogle className="mr-2" /> Register with Google
        </button>
      </div>
      <div id="recaptcha-container"></div>
      <div className="mt-4 text-center">
        <button onClick={() => setIsPhoneAuth(!isPhoneAuth)} className="text-blue-500">
          {isPhoneAuth ? 'Use Email/Password' : 'Use Phone Number'}
        </button>

        <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
   </div>
  );
}

export default Register;
