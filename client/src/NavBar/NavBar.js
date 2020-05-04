import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './NavBar.css';
import Weather from '../Weather/Weather';

function NavBar(props) {

  const API = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=bb4892467570d0dc3849658584cde7d5';
  const [weather, setWeather] = useState();


  useEffect(() => {

    axios.get(API).then(res => {
      console.log(res.data);
      setWeather(res.data);
     
    });


  }, []);

  
  return (
    <div className="navbar-wrapper">
      <div className="navbar-top">
      <div ><span className="navbar-logo">News</span><span className="navbar-logo mod">Cycle</span> </div> 
<div className="navbar-weather"><Weather weather={weather}/> </div>
      </div>
    <div className="navbar">
   
    <div className="navbar-item">Politics</div>
    <div className="navbar-item">Technology</div>
    <div className="navbar-item">Sport</div>
    <div className="navbar-item">Politics</div>
    <div className="navbar-item">Technology</div>
    </div> 
    </div>
  );
}

export default NavBar;