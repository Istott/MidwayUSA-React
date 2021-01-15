import React from 'react'

function contactForm(props) {

    const submitForm = e => {
        setTimeout(() => {
            props.setActive(true) 
        }, 1000)
            
    };

    const handleSelectChanges = e => {
        const valueSelected = e.target.value;
        // setPlant({ ...plant, [e.target.name]: valueSelected });

        if(valueSelected === 'trouble') {
            props.setActive(true)
        }
        
      };


  return (
    <div className="contactUsForm" >
        <div className="contactForm">
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
                    <div className="field half">
                        <select
                            id='h2oFrequency'
                            name='h2oFrequency'
                            onChange={handleSelectChanges}
                            required
                        >
                            <option>Select Option</option>
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
                    <input onClick={submitForm} type="submit" value="Send Message" className="primary" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    </div>
  );
}

export default contactForm;