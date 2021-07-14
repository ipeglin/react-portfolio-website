import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ContactInfo from '../../assets/ContactInfo';
import Footer from '../Footer';
import ContactInfoSection from '../ContactInfoSection';
import ContactFormSection from '../ContactFormSection';

function Contact() {
    return (
        <>
            <main>
                <HeroSection
                    header="STAY WITHIN REACH"
                    page="contact"
                />
                <ContactInfoSection contactInfo={ContactInfo} />
                <ContactFormSection />
            </main>
            <Footer />
        </>
    )
}

export default Contact
