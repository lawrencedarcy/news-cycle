import React from 'react';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className="navbar-wrapper">
    <div className="navbar">
    <div className="navbar-logo">NewsCycle </div> 
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