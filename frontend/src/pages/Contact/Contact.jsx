import React from 'react';
import "./contact.css";
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='contact'>
        <ContactHeader />
        <ContactForm />
    </div>
  )
}

export default Contact