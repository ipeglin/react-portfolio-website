import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactFormSection.css';
import '../../App.css';

/**
 * Function component for contact form section
 * @returns {div} Wrapper div with contact form
 */
function ContactFormSection() {
    return (
        <div className="wrapper">
            <section className="contact-form-section">
                <div className="contact-form-container">
                    <h2>Message me</h2>
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}

export default ContactFormSection;