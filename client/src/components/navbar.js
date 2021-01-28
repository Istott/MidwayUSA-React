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
                <p>Home</p>
                <p>Contact</p>
            </div>
        </div>
    </div>
  );
}

export default NavBar;