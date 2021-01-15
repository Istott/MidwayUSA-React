import React from 'react'

function suggestionForm(props) {
    const submitForm = e => {
        setTimeout(() => {
            props.setActive(true) 
        }, 1000)
            
    };
  return (
    <div className="productSuggestionForm" >
        <div className={`productForm ${props.initialLoad ? '' : 'tabContent'}`}>
            <h3>What product are you wanting to find?</h3>
            <form method="post" action="https://formspree.io/xdozegkw">
                <div className="fields">
                    <div className="field half">
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="field half">
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="field">
                        <textarea 
                            name="message" 
                            id="message"
                            placeholder="What product do you have in mind?" 
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="actions">
                    <input onClick={submitForm} type="submit" value="Send Message" className="primary" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    </div>
  );
}

export default suggestionForm;