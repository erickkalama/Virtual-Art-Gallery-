import React, { useState, useEffect } from 'react';
import Artwork from './Artwork';
import './Gallery.css';

const Gallery = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setArtists(data.artists || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>; 
  }

  return (
    <div className="gallery">
      {artists.length > 0 ? (
        artists.map((artist) => (
          <Artwork
            key={artist.id}
            name={artist.name || 'Unknown Artist'}
            image={artist.image || 'default-image-url'}
          />
        ))
      ) : (
        <p>No artists available</p> 
      )}
    </div>
  );
};

export default Gallery;
