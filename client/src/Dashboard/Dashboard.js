import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Dashboard.css';

function Dashboard({topStories}) {


  return (
    <div className='top-container'>
      {topStories && topStories.map(story => <NewsCard story={story} key={story.title}/>)}
    </div>
  );
}

export default Dashboard;
