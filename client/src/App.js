import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Dashboard from './Dashboard/Dashboard';
import axios from 'axios';


function App() {

  const [topStories, setTopStories] = useState([]);

  const sectionChange = (section) => {

    axios.get(`https://newsapi.org/v2/everything?q=uk ${section}&apiKey=0dc27b8b03d146529a79da477d2aaa48`
    ).then(res => {
      const stories = res.data.articles;
      setTopStories(() => stories);
    });

  } 

  useEffect(() => {
    const TOP_NEWS_URL =
      'https://newsapi.org/v2/top-headlines?' +
      'country=gb&' +
      'apiKey=0dc27b8b03d146529a79da477d2aaa48';

  
    axios.get(TOP_NEWS_URL).then(res => {
      const stories = res.data.articles;
      setTopStories(() => stories);
    });

  }, []);

 
  return (
    <div >
      <NavBar sectionChange={sectionChange}/>
      <Dashboard topStories={topStories}/>
    </div>
  );
}

export default App;
