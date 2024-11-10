import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "../styles/contact.css"; 

const Contact: React.FC = () => {
    return (
        <div id='contact' className='contact-container'>
            <div className="contact-grid md:grid-cols-2">
                <div className="contact-space">
                    <h2 className="contact-heading" data-aos="zoom-in-up">Get In Touch</h2>
                    <p className="contact-text" data-aos="zoom-in-up">
                        Drop Me A Line, Give Me A Call OR Leave Me A Message
                    </p>
                     
                    <div className="contact-flex" data-aos="zoom-in-up">
                        <AiOutlineMail size={30} />rahimali@gmail.com
                    </div>
                    
                    <div className="contact-flex" data-aos="zoom-in-up">
                        <AiOutlinePhone size={30} /> (+1) 569-4444666
                        
                    </div>
                </div>

                <div className="contact-space">
                    <div className="form" data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className='input-field' 
                            id='name' 
                        />
                    </div>
                    <div className="form" data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            className='input-field' 
                            id='email' 
                        />
                    </div>
                    <div className="form" data-aos="zoom-in-up">
                        <label htmlFor="msg">Message</label>
                        <textarea 
                            className='input-field' 
                            id='msg' 
                            rows={8}
                        ></textarea>
                    </div>
                    <button className="button" data-aos="zoom-in-up">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
