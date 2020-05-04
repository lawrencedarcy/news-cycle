import React from 'react';
import './NewsCard.css';

function NewsCard({ story }) {
  return (
    <div className="card">
      <div className="card_content-wrapper">
      <div className="card_source">{story.source.name}</div>
       <div className="card_headline">{story.title}</div>
       <div className="card_standfirst">{story.description.split('.', 2).join('')}</div>
       </div>
    </div>
  );
}

export default NewsCard;