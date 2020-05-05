import React from 'react';
import './Weather.css';

function Weather({weather}) {
  
  console.log('weather icon' , weather && weather.weather[0].icon);
  return (
    <div className='weather-box'>

    <img className='icon' src={`http://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`}></img>

    <div className='wrapper'>
       <div className='location'> {weather && weather.name}</div>
     <div className='temp'>{weather && weather.main.temp.toFixed(1)}°C</div>
      
    </div>
    </div>
  );
}

export default Weather;