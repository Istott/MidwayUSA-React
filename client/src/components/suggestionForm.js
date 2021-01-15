import React from 'react'

function SuggestionForm(props) {

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
                            value={props.required.name}
                            onChange={props.handleChanges}
                            id="name" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="field half">
                        <input 
                            type="text" 
                            name="email" 
                            value={props.required.email}
                            onChange={props.handleChanges}
                            id="email" 
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="field">
                        <textarea 
                            name="message" 
                            id="message"
                            value={props.required.message}
                            onChange={props.handleChanges}
                            placeholder="What product do you have in mind?" 
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="actions">
                    <input type="submit" value="Send Message" className="primary" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
            <div className='messages'>
                <p>{!props.required.name ? 'Need a name' : ''}</p>
                <p>{!props.required.email ? 'Must have valid email address' : ''}</p>
                <p>{!props.required.message ? 'Must have a message' : ''}</p>
            </div>           
        </div>
    </div>
  );
}

export default SuggestionForm;