import React from 'react';
import './ArtistCard.css'; 

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <img src={artist.Image} alt={artist.name} />
      <h2>{artist.name}</h2>
      <p>{artist.biography}</p>
    </div>
  );
};

export default ArtistCard;