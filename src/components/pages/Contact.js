import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import ContactInfo from '../../assets/ContactInfo';
import Footer from '../Footer/Footer';
import ContactInfoSection from '../ContactInfoSection/ContactInfoSection';
import ContactFormSection from '../ContactFormSection/ContactFormSection';

function Contact() {
    document.title = "Contact | ipeglin"
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
