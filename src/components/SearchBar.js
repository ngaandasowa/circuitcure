import React, { useState, useRef, useEffect } from 'react';
import { debounce } from 'lodash'; // Ensure lodash is installed with `npm install lodash`

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedSearchRef = useRef(null);

  // Initialize the debounced search function only once
  useEffect(() => {
    debouncedSearchRef.current = debounce((nextValue) => {
      onSearch(nextValue);
    }, 500);

    // Cleanup the debounced function on component unmount
    return () => {
      if (debouncedSearchRef.current) {
        debouncedSearchRef.current.cancel();
      }
    };
  }, [onSearch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearchRef.current(value); // Call debounced function
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for computer issues..."
        className="p-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
