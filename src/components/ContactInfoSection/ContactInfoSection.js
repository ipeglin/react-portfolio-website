import React from 'react';
import './ContactInfoSection.css';
import '../../App.css';

function ContactInfoSection({ contactInfo }) {
    return (
        <div className="wrapper">
            <section className="contact-info">
                <div className="contact-info-container">
                    <div className="contact-info-box">
                        <h2>{contactInfo.city}</h2>
                        <p>{contactInfo.address}</p>
                        <p>{contactInfo.postCode}</p>
                    </div>
                    <div className="contact-info-box">
                        <h2>Contact info</h2>
                        <p>{`TLF: ${contactInfo.phoneNumber}`}</p>
                        <p>{`E-mail ${contactInfo.email}`}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactInfoSection;
