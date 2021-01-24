import React, {useState} from 'react'

function SuggestionForm(props) {

    const [validate, setValidate] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [required, setRequired] = useState({
        name: '',
        email: '',
        message: '' 
    });

    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setRequired({ ...required, [name]: value });

        if(name === 'message' && !value) {
            setValidate({...validate, message: 'Must have a message'})
        } else {
            setValidate({...validate, message: ""})
        }
    };

    const handleNameChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setRequired({ ...required, [name]: value });
        
        if(name === 'name' && (value.length <= 3)) {
            setValidate({...validate, name: "Name must be longer than 3 characters"})
        } else {
            setValidate({...validate, name: ""})
        }
    };

    const handleEmailChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setRequired({ ...required, [name]: value });
        
        if(value.length >= 8 && value.includes('@')) {
            setValidate({...validate, email: ""})
        } else {
            setValidate({...validate, email: "must have a valid email address"})
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
                            onChange={handleNameChanges}
                            id="name" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className='messages'>
                        <p>{validate.name}</p>
                    </div>
                    <div className="field half">
                        <input 
                            type="text" 
                            name="email" 
                            value={required.email}
                            onChange={handleEmailChanges}
                            id="email" 
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className='messages'>
                        <p>{validate.email}</p>
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
                    <div className='messages'>
                        <p>{validate.message}</p>
                    </div>
                </div>
                <div className="actions">
                    <input type="submit" value="Send Message" className="primary" />
                    <input type="reset" value="Reset" />
                </div>
            </form>         
        </div>
    </div>
  );
}

export default SuggestionForm;