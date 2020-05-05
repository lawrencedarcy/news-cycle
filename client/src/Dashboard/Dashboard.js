import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Dashboard.css';

function Dashboard({topStories}) {


  return (
    <div className='top-container'>
      {topStories && topStories.map(story => <NewsCard story={story} />)}
    </div>
  );
}

export default Dashboard;
