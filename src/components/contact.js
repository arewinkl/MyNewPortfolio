import React, { useState } from 'react';
import Modal from './modal';
import '../App.css';

function Contact() {
    const [show, setShow] = useState(false);
     
function open(){
  setShow(true);
}

function close(){
  setShow(false);
}
        return(

         <div>
                  <h1 className='contact_heading'>CONTACT</h1>

                  <div className="contact_subheading">
                    <p>
                      If you would like to learn more about my experience and schedule a phone or in-person meeting, please feel free to contact me.
                    </p>
                  </div>

                  <div className="item-contacts">
                    <a href="tel:303-842-5715">
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      303-842-5715
                    </a>
                    <a href = "mailto: alecrewinkel@gmail.com">
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      Alecrewinkel@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/alec-rewinkel-90a7a218b/" rel="noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                      Linked-In/ Alec Rewinkel
                    </a>
                    <a href="https://github.com/arewinkl" rel="noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                      Github.com/arewinkl
                    </a>
                  </div>
                 
                  <button className="show-btn" onClick={open}>Send Message</button>
                    <Modal onClose={close} show={show}/>
                 
          </div>

        );
    }


export default Contact;
