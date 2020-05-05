import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../NewsCard/NewsCard';
import './Dashboard.css';

function Dashboard(props) {
  const [topStories, setTopStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const BUSINESS =
    'https://newsapi.org/v2/everything?q=uk business&apiKey=0dc27b8b03d146529a79da477d2aaa48';
  const SPORT =
    'https://newsapi.org/v2/everything?q=uk sport&apiKey=0dc27b8b03d146529a79da477d2aaa48';


   
  const sectionChange = (section) => {

    axios.get(`https://newsapi.org/v2/everything?q=uk ${section}&apiKey=0dc27b8b03d146529a79da477d2aaa48`
    ).then(res => {
      console.log('section stories', res.data.articles);
      const stories = res.data.articles;
      setTopStories(() => stories);
    });

  } 

  useEffect(() => {
    const TOP_NEWS_URL =
      'https://newsapi.org/v2/top-headlines?' +
      'country=gb&' +
      'apiKey=0dc27b8b03d146529a79da477d2aaa48';

    const ALL_STORIES =
      `https://newsapi.org/v2/everything?` +
      'sources=axios,mtv-news-uk,national-geographic,new-scientist,independent,mashable, associated-press&' +
      'apiKey=ea38cf2225msh7d347b2896b1b90p1e7db9jsna4ee40304094';

    axios.get(TOP_NEWS_URL).then(res => {
      console.log('top stories', res.data.articles);
      const stories = res.data.articles;
      setTopStories(() => stories);
    });
    axios.get(ALL_STORIES).then(res => {
      console.log(res.data.articles);
      const allStories = res.data.articles;
      setAllStories({ allStories });
    });
  }, []);

  return (
    <div className='top-container'>
      {topStories && topStories.map(story => <NewsCard story={story} />)}
    </div>
  );
}

export default Dashboard;
