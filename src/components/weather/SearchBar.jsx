// Import necessary dependencies
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { searchLocations } from "@/services/api/weatherApi";

// SearchBar component for searching and selecting locations
export default function SearchBar() {
  // Local state for search query and suggestions
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Access the global context to set the selected location
  const { setLocation } = useApp();

  // Handles search input changes and fetches location suggestions
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    // Fetch suggestions if the query length is greater than 2
    if (value.length > 2) {
      const results = await searchLocations(value);
      setSuggestions(results);
    } else {
      // Clear suggestions if the query is too short
      setSuggestions([]);
    }
  };

  // Handles selecting a location from the suggestions
  const selectLocation = (loc) => {
    setLocation(loc); // Update the global location context
    setQuery(loc.name); // Set the query to the selected location name
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div className="search-container">
      {/* App title and subtitle */}
      <h1>Weath2r | Your Trusted Weather App</h1>
      <h2>Search for a location</h2>

      {/* Search input field */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search location..."
        className="search-input"
      />

      {/* Display suggestions if available */}
      {suggestions.length > 0 && (
        <ul className="search-suggestions">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => selectLocation(suggestion)}>
              {/* Display location name and country */}
              <p className="LocName">
                {suggestion.name}, {suggestion.country}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}