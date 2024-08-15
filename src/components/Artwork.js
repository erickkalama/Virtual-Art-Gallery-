import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Artwork.css';

const Artwork = ({ name, image }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [purchased, setPurchased] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleAddComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  const handlePurchase = () => {
    setPurchased(true);
  };

  return (
    <div className="artwork-card">
      <img src={image} alt={name} className="artwork-image" />
      <h2 className="artwork-name">{name}</h2>
      <div className="artwork-actions">
        <button
          className="artwork-action"
          aria-label={`Like ${name}`}
          onClick={handleLike}
        >
          Like {likes}
        </button>
        <button
          className="artwork-action"
          aria-label={`Comment on ${name}`}
          onClick={handleAddComment}
        >
          Comment
        </button>
        <button
          className="artwork-action"
          aria-label={`Purchase ${name}`}
          onClick={handlePurchase}
          disabled={purchased}
        >
          {purchased ? 'Purchased' : 'Purchase'}
        </button>
      </div>
      {comments.length > 0 && (
        <div className="artwork-comments">
          <h3>Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
      <textarea
        value={commentInput}
        onChange={handleCommentChange}
        placeholder="Add a comment"
      />
    </div>
  );
};

Artwork.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artwork;
