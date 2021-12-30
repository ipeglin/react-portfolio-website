import React from 'react';
import './ContactInfoSection.css';
import '../../App.css';

/**
 * Function component containing contact information.
 * @param {object} contactInfo - Object with contact info imported.
 * @returns {div} Wrapper div with contact info section.
 */
function ContactInfoSection({ contactInfo }) {
    return (
        <div className="wrapper">
            <section className="contact-info">
                <div className="contact-info-container">
                    <div className="contact-info-box">
                        <h2 className="uppercase">{contactInfo.city}</h2>
                        <p className="uppercase">{contactInfo.address}</p>
                        <p className="uppercase">{contactInfo.postCode}</p>
                    </div>
                    <div className="contact-info-box">
                        <h2 className="uppercase">Contact info</h2>
                        <p>{`TLF: ${contactInfo.phoneNumber}`}</p>
                        <p>{`E-mail: ${contactInfo.email}`}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactInfoSection;
