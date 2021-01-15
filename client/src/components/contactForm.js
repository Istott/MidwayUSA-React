import React from 'react'

function contactForm(props) {

    const submitForm = e => {
        setTimeout(() => {
            props.setActive(true) 
        }, 1000)
            
    };


  return (
    <div class="contactUsForm" >
        <span><p>Have a question?</p><button onclick="toggleContactForm()">Ask us here</button></span>
        <div id="contactForm">
            <form method="post" action="https://formspree.io/xdozegkw">
                <div class="fields">
                    <div class="field half">
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div class="field half">
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div class="field">
                        <textarea 
                            name="message" 
                            id="message"
                            placeholder="What's your question?" 
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>
                <div class="actions">
                    <input onClick={submitForm} type="submit" value="Send Message" class="primary" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    </div>
  );
}

export default contactForm;