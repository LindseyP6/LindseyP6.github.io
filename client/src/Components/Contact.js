import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
import { IoIosSend }  from "react-icons/io";
import Alert from 'react-bootstrap/Alert';

function Contact({catsArray}) {
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4nwn4nh', 'template_vnaur6g', form.current, '_5ChwLXwfEmFLcvA1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      .then(alert("Thank you for your email!"))
      history.push(0)
  };

  const singleCatImg = catsArray.sort(() => Math.random() - .5).slice(0, 1);

  const catImgs = singleCatImg.map((cat) => 
    <img src={cat.image} alt={cat.name}/>
  );

  return (
    <div className="contact-page">
      <div className="contact-grid">
        <img className="contact-grid-pic1" src="https://storage.cloud.google.com/all-cats/ACAB%20Border.png"/>

        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="email-form"
          >
            <h1>Contact Us!</h1>
            <br></br>
            <input 
              className="email-fields" 
              type="text" 
              name="user_name" 
              placeholder="Name" 
              />
            <br></br>
            <input 
              className="email-fields" 
              type="email" 
              name="user_email" 
              placeholder="Email"
              />
            <br></br>
            <textarea 
              className="email-fields" 
              name="message" 
              placeholder="Message" 
              rows="6"
              />
            <br></br>
            <button 
                type="submit"
                name="submit"
                className="email-submit"> 
                <span className="email-submit">Send 
                <IoIosSend className="send-email-icon"/>
                </span>
            </button>
        </form>

        <img className="contact-grid-pic2" src="https://storage.cloud.google.com/all-cats/ACAB%20Border2.png"/>
      {/* <div className="contact-cat-images">
          {catImgs}
        </div> */}
        </div>
    </div>
  )
}

export default Contact