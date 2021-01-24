import React, {useState} from 'react'

function ContactForm(props) {

    const [validate, setValidate] = useState({
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

    const handleSelectChanges = e => {
        const valueSelected = e.target.value;

        if(valueSelected === 'trouble') {
            props.setActive(false)
        }

        if(valueSelected !== "") {
            setRequired({selected: true})
        } else {
            setRequired({selected: false})
        }
    };

  return (
    <div className="contactUsForm" >
        <div className={`contactForm ${props.initialLoad ? '' : 'tabContent'}`}>
            <h3>We would love to hear from you!</h3>
            <form method="post" action="https://formspree.io/xdozegkw">
                <div className="fields">
                    <div className="field">
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
                    <div className="field">
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
                        <select
                            id='options'
                            name='options'
                            onChange={handleSelectChanges}
                            required
                        >
                            <option value="" disabled selected >Select option</option>
                            <option value='order'>Order question</option>
                            <option value='web'>Website feedback</option>
                            <option value='trouble'>Trouble finding a product</option>
                        </select>
                    </div>
                    <div className='messages'>
                        <p>{!required.selected ? 'Must select option' : ''}</p>
                    </div>
                    <div className="field">
                        <textarea 
                            name="message" 
                            id="message"
                            value={required.message}
                            onChange={handleChanges}
                            placeholder="message here" 
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className='messages'>
                        <p>{validate.message}</p>
                    </div>
                </div>
                <div className="actions">
                    <input disabled={!required.selected} type="submit" value="Send Message" className="primary" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    </div>
  );
}

export default ContactForm;