
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import only Routes and Route
import ArtistCard from './ArtistCard';
import Gallery from './Gallery';
import Navbar from './Navbar';
import About from './About';
import HomePage from './HomePage';
import Footer from './Footer';

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
      <div>
      <Navbar />
      </div>
       
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
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
     <Footer />
    </div>
  );
};

export default App;
