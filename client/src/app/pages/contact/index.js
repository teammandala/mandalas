import React from "react";
// import { Link } from 'react-router-dom';
import ContactForm from "../../components/form/contact";
import "./style.css";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-box">
          <div className="illustration-wrapper">
          <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
