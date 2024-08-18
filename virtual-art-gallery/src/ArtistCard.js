// src/components/ArtistCard.js
import React, { useState } from 'react';
import './ArtistCard.css'; // Import the CSS file for styling

const ArtistCard = ({ artist }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="artist-card">
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <h2 className="artist-name">{artist.name}</h2>
      <p className="artist-biography">{artist.biography}</p>
      <div className="like-section">
        <button className="like-button" onClick={handleLike}>
          <span className="like-icon">❤️</span>
        </button>
        <span className="like-count">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </div>
    </div>
  );
};

export default ArtistCard;
