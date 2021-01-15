// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

import NavBar from './components/navbar';
import SuggestionForm from './components/suggestionForm';
import ContactForm from './components/contactForm';

function App() {
  const [active, setActive] = useState(true)

  return (
    <div className="App">
      <body>
        <NavBar/>

        <div className='toggle'>
          <div className="tab" >
              <button className={`Button ${ active ? 'active' : ''}`} onClick={() => setActive(true)} >Have a suggestion?</button>
              <button className={`Button ${active ? '' : 'active'}`} onClick={() => setActive(false)}>Contact us</button>
          </div>
        </div>

        <div class="container">
          <section class="middle">
            <div className={`loginCard ${active ?'activeTab':'tabContent'}`}>
                <div className="login">
                  <SuggestionForm setActive = {setActive}  /> 
                </div>
            </div>

            <div className={`loginCard ${active ?'tabContent':'activeTab'}`}>
                <ContactForm setActive = {setActive} />
            </div>
          </section>

          <footer>
              <div class="copyright">
                  <p1>©2021 MidwayUSA. All rights reserved</p1>
              </div>
          </footer>
      </div>
      </body>
    </div>
  );
}

export default App;