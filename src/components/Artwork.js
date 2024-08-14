import React from 'react';

const Artwork = ({ name, biography, image }) => {
  return (
    <div className="artwork">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{biography}</p>
    </div>
  );
};

export default Artwork;
