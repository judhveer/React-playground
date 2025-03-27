import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setMovie(null);
    setLoading(true); // Start loading before fetching data

    try {
      // Using the free demo key "thewdb". Replace with your own key if needed.
      const response = await fetch(`http://www.omdbapi.com/?apikey=thewdb&t=${query}`);
      const data = await response.json();
      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("Error fetching movie data");
    }
    
    setLoading(false); // End loading after the data is fetched or an error occurs
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Movie Search</h1>
      </header>
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            value={query}
            placeholder="Enter movie title..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {/* Display a loading message when fetching movie data */}
      {loading && <p className="loading">Loading movie information...</p>}
      {error && <p className="error">{error}</p>}
      {movie && (
        <div className="movie-info">
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          {movie.Poster !== "N/A" && (
            <img src={movie.Poster} alt={movie.Title} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
