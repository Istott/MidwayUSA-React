import React from 'react'

function contactForm(props) {

    const handleSelectChanges = e => {
        const valueSelected = e.target.value;

        if(valueSelected === 'trouble') {
            props.setActive(false)
        }

        if(valueSelected != "") {
            props.setRequired({selected: true})
        }
    };

    // const submitForm = e => {
        
    //     setTimeout(() => {
    //         props.setActive(true) 
    //     }, 1000)
            
    // };


  return (
    <div className="contactUsForm" >
        <div className={`contactForm ${props.initialLoad ? '' : 'tabContent'}`}>
            <form method="post" action="https://formspree.io/xdozegkw">
                <div className="fields">
                    <div className="field">
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="field">
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="field">
                        <select
                            id='h2oFrequency'
                            name='h2oFrequency'
                            onChange={handleSelectChanges}
                            required
                        >
                            <option defaultValue="" disabled selected>Select option</option>
                            <option value='order'>Order question</option>
                            <option value='web'>Website feedback</option>
                            <option value='trouble'>Trouble finding a product</option>
                        </select>
                    </div>
                    <div className="field">
                        <textarea 
                            name="message" 
                            id="message"
                            placeholder="What's your question?" 
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
        </div>
    </div>
  );
}

export default contactForm;