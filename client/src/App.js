// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

import NavBar from './components/navbar';
import SuggestionForm from './components/suggestionForm';
import ContactForm from './components/contactForm';

function App() {
  const [initialLoad, setInitialLoad] = useState(false)
  const [active, setActive] = useState(true)
  const [required, setRequired] = useState({
    name: '',
    email: '',
    selected: false,
    message: '' 
  })
  console.log(required.selected)

  // const submitCheck = () => {
  //   check what form we are on
  //   - if contactForm
  //     - check if all fields are filled in including selected is set to true
  //   - else suggestionForm
  //     - check all fields are filled. dont check selected
  // }

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
          <div className={`loginCard ${active ? 'tabContent' : 'activeTab'}`}>
              <div className="login">
                <SuggestionForm initialLoad = {initialLoad} setActive = {setActive} setRequired = {setRequired} /> 
              </div>
          </div>

          <div className={`loginCard ${active ? 'activeTab' : 'tabContent'}`}>
              <ContactForm initialLoad = {initialLoad} setActive = {setActive} setRequired = {setRequired} />
          </div>
        </section>

        <footer>
            <div className="copyright">
                <p>©2021 MidwayUSA. All rights reserved</p>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
