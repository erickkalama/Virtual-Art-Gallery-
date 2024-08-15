import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import './App.css'; // Optional: for global styling

const App = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('http://localhost:3000/artists');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          setArtists(data);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching artist data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return <div className="app">Loading...</div>; // Display loading state
  }

  if (error) {
    return <div className="app">Error: {error}</div>; // Display error message
  }

  return (
    <div className="app">
      <h1>Artist Cards</h1>
      <div className="artist-cards-container">
        {artists.length > 0 ? (
          artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p>No artists available.</p> // Display message if no artists
        )}
      </div>
    </div>
  );
};

export default App;