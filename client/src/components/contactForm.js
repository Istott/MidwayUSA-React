import React, {useState} from 'react'

function ContactForm(props) {
    const [required, setRequired] = useState({
        name: '',
        email: '',
        selected: false,
        message: '' 
    })

    const handleChanges = e => {
        setRequired({ ...required, [e.target.name]: e.target.value });
    };

    const handleSelectChanges = e => {
        const valueSelected = e.target.value;

        if(valueSelected === 'trouble') {
            props.setActive(false)
        }

        if(valueSelected !== "") {
            setRequired({selected: true})
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
                            onChange={handleChanges}
                            id="name" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="field">
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
                        <select
                            id='options'
                            name='options'
                            onChange={handleSelectChanges}
                            required
                        >
                            <option defaultValue="" disabled selected >Select option</option>
                            <option value='order'>Order question</option>
                            <option value='web'>Website feedback</option>
                            <option value='trouble'>Trouble finding a product</option>
                        </select>
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
                </div>
                <div className="actions">
                    <input disabled={!required.selected} type="submit" value="Send Message" className="primary" />
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

export default ContactForm;