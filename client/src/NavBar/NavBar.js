import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NavBar.css';
import Weather from '../Weather/Weather';

function NavBar({ sectionChange }) {
  const API =
    'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=bb4892467570d0dc3849658584cde7d5';
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get(API).then(res => {
      setWeather(res.data);
    });
  }, []);

  const clickHandler = genre => {
    console.log(genre);
    sectionChange(genre);
  };

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-top'>
        <div className='flex'>
          <span className='navbar-logo'>News</span>
          <span className='navbar-logo mod'>Cycle</span>{' '}
        </div>
        <div className='navbar-weather'>
          <Weather weather={weather} />{' '}
        </div>
      </div>
      <div className='navbar'>
        <a className='navbar-item' href="/">
          News
        </a>
        <button className='navbar-item' onClick={() => clickHandler('technology')}>Technology</button>
        <button className='navbar-item' onClick={() => clickHandler('sport')}>Sport</button>
        <button className='navbar-item hide' onClick={() => clickHandler('environment')}>Environment</button>
        <button className='navbar-item' onClick={() => clickHandler('lifestyle')}>Lifestyle</button>
      </div>
    </div>
  );
}

export default NavBar;
