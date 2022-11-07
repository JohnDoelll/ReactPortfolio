import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { Bounce } from "react-awesome-reveal";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ggy4zi9', 'template_q604h98', form.current, 'P_i0i6sGN-p0rBrgj')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        {/* Start of contact options */}
        <div className="contact__options">
        <Bounce cascade damping={0.1}>
          <article className="contact__option">
            <MdOutlineEmail  className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>eldorshodmonov55@gmail.com</h5>
            <a href="mailto:eldorshodmonov55@gmail.com">Send a message</a>
          </article>
       

       
          <article className="contact__option">
            <RiMessengerLine  className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>eldor_shodmonov99</h5>
            <a href="https://instagram.com/eldor_shodmonov99">Send a message</a>
          </article>
        

       
          <article className="contact__option">
            <BsTelegram  className="contact__option-icon"/>
            <h4>Telegram</h4>
            <h5>JohnDoell</h5>
            <a href="https://telegram.me/JohnDoell">Send a message</a>
          </article>
        </Bounce>

        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name"  required />
          <input type="email"  name="email" placeholder="Your Email" required />
          <textarea name="messege" placeholder="Your messege" required  rows="7"></textarea>
          <button className="btn btn-primary">Send Messege</button>
        </form>
        {/* End of form  */}
      </div>
    </section>
  );
};

export default Contact;
