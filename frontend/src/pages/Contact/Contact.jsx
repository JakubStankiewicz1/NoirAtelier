import React from "react";
import "./contact.css";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import Fotter from "../../components/Fotter/Fotter";

const Contact = () => {
  return (
    <div className="contact">
      <ContactHeader />
      <ContactForm />
      <Fotter />
    </div>
  );
};

export default Contact;
