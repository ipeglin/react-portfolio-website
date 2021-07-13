import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function About() {
    return (
        <>
          <HeroSection
                header="ABOUT PAGE"
                text="Nothing to see here"
                page="about"
            />
            <Footer />  
        </>
    )
}

export default About
