import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import contactInfo from '../../assets/contactInfo';
import Footer from '../Footer';
import ContactInfoSection from '../ContactInfoSection';
import ContactFormSection from '../ContactFormSection';

function Contact() {
    return (
        <>
            <main>
                <HeroSection
                    header="CONTACT PAGE"
                    text="Nothing to see here"
                    page="contact"
                />
                <ContactInfoSection contactInfo={contactInfo} />
                <ContactFormSection />
            </main>
            <Footer />
        </>
    )
}

export default Contact
