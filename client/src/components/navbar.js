import React from 'react'
// import './App.css';

import midwayusaimg from '../img/midwayusa.png';

function NavBar() {
  return (
    <div class="navigation">
        <div class="top">
            <div class="journal">
                <img src={midwayusaimg} alt="MidwayUSA"/>
            </div>
            
            <div id="myLinks">
                <a href="#">Home</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </div>
  );
}

export default NavBar;