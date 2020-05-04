import React from 'react';
import './NewsCard.css';

function NewsCard({ story }) {
  return (
    <div className="card">
       {story.title}
    </div>
  );
}

export default NewsCard;