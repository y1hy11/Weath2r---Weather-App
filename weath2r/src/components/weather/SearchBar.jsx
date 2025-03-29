import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { searchLocations } from '@/services/api/weatherApi';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { setLocation } = useApp();

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      const results = await searchLocations(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const selectLocation = (loc) => {
    setLocation(loc);
    setQuery(loc.name);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
        <h1>Weath2r | Your Trusted Weather App</h1>
        <h2>Search for a location</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search location..."
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="search-suggestions">
          {suggestions.map((suggestion) => (
            <li 
              key={suggestion.id}
              onClick={() => selectLocation(suggestion)}
            >
              <p className='LocName'>{suggestion.name}, {suggestion.country}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
