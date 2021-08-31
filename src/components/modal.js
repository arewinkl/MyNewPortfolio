import React from 'react'
import emailjs from 'emailjs-com';

const Modal = props => {
    if (!props.show) {
        return null
    }
    
    function sendEmail(e) {
        e.preventDefault();

        let name = document.getElementById('name').value
        let sub = document.getElementById('subject').value
        let email = document.getElementById('email').value
        let message = document.getElementById('message').value

        console.log(sub)
        
        if(name === ""){
            alert("Don't forget your name!")
        } else if(sub === ""){
            alert("Ooops you need to add a subject.")
        } else if (email === ""){
            alert("Add your email so we can be in touch.")
        } else if (message === ""){
            alert("don't forget to write a message!")
        }
        
       else {
        emailjs.sendForm('service_m1p5k8n', 'template_jwn8dl9', e.target, 'user_NNWL5UYVJXH51DemlZ0fQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         
       props.onClose();
        }
      }
    
    return(
        <div className="modal">
                       

            <form onSubmit={sendEmail} className="modal-content"
           >
            <button onClick={props.onClose} data-close-button id="close-button">&times;</button>
                <br/>
                <div className="modal-header">
                    
                        Name <input className="name-input" name="name" id="name"></input>
                </div>
                <div className="modal-sub">
                    Subject <input className="subject-input" name="subject" id="subject"></input>
                </div>
                <div className="modal-body">
                    Email <input className="email-input" name="email" id="email"></input>
                </div>
                
                <div className="modal-footer">
                    Message:<br/> <textarea className="contact-message" name="contact-message" rows="8" cols="55" id="message"></textarea>
                    <div>
                    <button id="sub" type="submit" value="send" className="modal-btn">Send</button>
                    </div>
                    
                    
                </div>
           
            </form>
        </div>
    )
}

export default Modal