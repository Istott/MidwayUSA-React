import React, {useState} from 'react'

function SuggestionForm(props) {
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
                            value={required.name}
                            onChange={handleChanges}
                            id="name" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="field half">
                        <input 
                            type="text" 
                            name="email" 
                            value={required.email}
                            onChange={handleChanges}
                            id="email" 
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="field">
                        <textarea 
                            name="message" 
                            id="message"
                            value={required.message}
                            onChange={handleChanges}
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
                <p>{!required.name ? 'Need a name' : ''}</p>
                <p>{!required.email ? 'Must have valid email address' : ''}</p>
                <p>{!required.message ? 'Must have a message' : ''}</p>
            </div>           
        </div>
    </div>
  );
}

export default SuggestionForm;