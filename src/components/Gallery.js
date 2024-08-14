import React, { useState, useEffect } from 'react';
import Artwork from './Artwork';

const Gallery = () => {
  const [artists, setArtists] = useState([]);

  // Fetch data from the JSON server
  useEffect(() => {
    fetch('http://localhost:5000/artists')
      .then((response) => response.json())
      .then((data) => setArtists(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="gallery">
      {artists.map((artist) => (
        <Artwork
          key={artist.id}
          name={artist.name}
          biography={artist.biography}
          image={artist.image || artist.Image} 
        />
      ))}
    </div>
  );
};

export default Gallery;
