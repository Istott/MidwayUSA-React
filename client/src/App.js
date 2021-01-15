// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

import NavBar from './components/navbar';
import SuggestionForm from './components/suggestionForm';
import ContactForm from './components/contactForm';

function App() {
  const [initialLoad, setInitialLoad] = useState(false)
  const [active, setActive] = useState(true)
  const [validated, setValidated] = useState({
    name: '',
    email: '',
    message: '' 
  })
  const [required, setRequired] = useState({
    name: '',
    email: '',
    selected: false,
    message: '' 
  })

  const handleChanges = e => {
    setRequired({ ...required, [e.target.name]: e.target.value });

    if(!required.name) {
      setValidated({name: 'Name please'})
    } else {
      setValidated({name: ''})
    }
  };

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
                <SuggestionForm 
                  initialLoad = {initialLoad} 
                  setActive = {setActive} 
                  setRequired = {setRequired} 
                  required = {required}
                  handleChanges = {handleChanges}
                /> 
              </div>
          </div>

          <div className={`loginCard ${active ? 'activeTab' : 'tabContent'}`}>
              <ContactForm 
                initialLoad = {initialLoad} 
                setActive = {setActive} 
                setRequired = {setRequired}
                required = {required}
                handleChanges = {handleChanges}
              />
          </div>
        </section>
      </div>

      <div className={`messages ${initialLoad ? '' : 'tabContent'}`}>
        {/* <p>{validated.name}</p> */}
        {/* <p>{required.email.includes("@") ? '' : 'Must have valid email address'}</p>
        <p>{required.message.length < 5 ? 'Message needs to be longer than 5 characters' : ''}</p> */}
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
