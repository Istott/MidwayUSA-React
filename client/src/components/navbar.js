import React from 'react'

import midwayusaimg from '../img/midwayusa.png';

function NavBar() {
  return (
    <div className="navigation">
        <div className="top">
            <div>
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