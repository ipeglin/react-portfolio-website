import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';

function About() {
    document.title = "About | ipeglin"
    return (
        <>
            <main>
                <HeroSection
                    header="IAN PHILIP EGLIN"
                    page="about"
                />
            </main>
            <Footer />  
        </>
    )
}

export default About
