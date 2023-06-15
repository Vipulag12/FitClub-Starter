import React from 'react'
import { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"
export default function Join() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_icgo3kr', 'template_ev2v8hv', form.current, 'uiptffEj_lCzpSgwv')
          .then((result) => {
              console.log(result);
              console.log(e);
              if(form.value===" "){
                alert("Please fill the information");
              }else{
                alert("email has been sent");
              }
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}
