// pages/SearchResults.js
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { issues } from '../data/issues';
import SearchBar from '../components/SearchBar';
import VoiceSearch from '../components/VoiceSearch';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [fuse] = useState(new Fuse(issues, { keys: ['title', 'description'], includeScore: true }));

  const handleSearch = (query) => {
    if (query) {
      const result = fuse.search(query);
      setResults(result.map(r => r.item));
    } else {
      setResults(issues);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <VoiceSearch onSearch={handleSearch} />
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map(issue => (
              <li key={issue.id} className="border-b py-2">
                <h3 className="text-lg font-semibold">{issue.title}</h3>
                <p>{issue.sub_description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
