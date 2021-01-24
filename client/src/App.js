import React, {useState} from 'react';
import './App.css';

import NavBar from './components/navbar';
import SuggestionForm from './components/suggestionForm';
import ContactForm from './components/contactForm';


function App() {
  const [initialLoad, setInitialLoad] = useState(false)
  const [active, setActive] = useState(true)

  const firstClickSuggestion = () => {
    if(!initialLoad) {
      setInitialLoad(true)
      setActive(false)
    } else {
      setActive(false)
    }
  }

  const firstClickContact = () => {
    if(!initialLoad) {
      setInitialLoad(true)
      setActive(true)
    } else {
      setActive(true)
    }
  }

  return (
    <div className="App">
      <NavBar/>

      <div className='toggle'>
        <div className="tab" >
            <button className={`Button ${active ? 'active' : ''}`} onClick={firstClickSuggestion} >Trouble finding something?</button>
            <button className={`Button ${active ? '' : 'active'}`} onClick={firstClickContact}>Contact us</button>
        </div>
      </div>

      <div className="container">
        <section className="middle">
          <div className={`formCard ${active ? 'tabContent' : 'activeTab'}`}>
              <div className="login">
                <SuggestionForm 
                  initialLoad = {initialLoad} 
                  setActive = {setActive} 
                /> 
              </div>
          </div>

          <div className={`formCard ${active ? 'activeTab' : 'tabContent'}`}>
              <ContactForm 
                initialLoad = {initialLoad} 
                setActive = {setActive} 
              />
          </div>
        </section>
      </div>

      <footer>
          <div className="copyright">
              <p>©2021 MidwayUSA. All rights reserved</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
