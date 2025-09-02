import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaRegThumbsUp, FaRegThumbsDown, FaUserCircle } from 'react-icons/fa';
import { auth } from '../firebaseConfig';

function Forum() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [categories] = useState(['General', 'Technical', 'Billing', 'Support']); // Example categories
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [questions, setQuestions] = useState([]); // Placeholder for questions data

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    setIsLoggedIn(!!currentUser);
    setUser(currentUser);

    // Example questions data; replace with data from Firebase if available
    setQuestions([
      { id: 1, title: 'How to reset password?', details: 'I forgot my password...', category: 'Support', user: 'Tino Talks Tech' },
      { id: 2, title: 'General issue', details: 'How do I play Duta on Android...', category: 'Billing', user: 'Tino Mukoma weDuta' },
      // Add more questions here
    ]);
  }, []);

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('Please log in to ask a question.');
      navigate('/login');
    } else {
      // Add logic to submit question to Firebase or local state
      alert('Question submitted!');
    }
  };

  const handleVote = (type) => {
    if (!isLoggedIn) {
      alert('Please log in to vote.');
      navigate('/login');
    } else {
      // Add logic to handle voting
      alert(`You ${type}voted!`);
    }
  };

  const filteredQuestions = selectedCategory === 'All' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  return (
    <div className="bg-gray-100 text-black min-h-screen">
      <div className="container mx-auto p-4">
        {user && (
          <div className="flex items-center mb-6">
            <FaUserCircle className="text-4xl mr-4 text-gray-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.displayName}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl mb-4 font-semibold flex items-center">
            <FaEdit className="mr-2" />
            Ask a Question
          </h2>
          <form onSubmit={handleAskQuestion} className="mb-4">
            <textarea
              rows="4"
              placeholder="Ask your question..."
              className="p-2 border border-gray-300 rounded-lg w-full mb-4"
              required
            ></textarea>
            <select
              className="p-2 border border-gray-300 rounded-lg w-full mb-4"
              defaultValue=""
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full"
            >
              Post Question
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Questions</h2>
            <select
              className="p-2 border border-gray-300 rounded-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {filteredQuestions.length > 0 ? (
            filteredQuestions.map(question => (
              <div key={question.id} className="mb-4 border border-gray-300 p-4 rounded-lg shadow-lg bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{question.title}</h3>
                <p className="mt-2 text-gray-700">{question.details}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex">
                    <button
                      onClick={() => handleVote('up')}
                      className="flex items-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300 mr-2"
                    >
                      <FaRegThumbsUp className="mr-1" />
                      Upvote
                    </button>
                    <button
                      onClick={() => handleVote('down')}
                      className="flex items-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
                    >
                      <FaRegThumbsDown className="mr-1" />
                      Downvote
                    </button>
                  </div>
                  <span className="text-gray-600">Posted by {question.user}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No questions available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Forum;
