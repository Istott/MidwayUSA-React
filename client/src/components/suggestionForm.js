import React from 'react'

function suggestionForm(props) {
    const submitForm = e => {
        setTimeout(() => {
            props.setActive(true) 
        }, 1000)
            
    };
  return (
    <div class="productSuggestionForm" >
        <span><p>Have product ideas?</p><button onclick="toggleProductForm()">Share with us</button></span>
        <div id="productForm">
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
                            placeholder="What product do you have in mind?" 
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

export default suggestionForm;