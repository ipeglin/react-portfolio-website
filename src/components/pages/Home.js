import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import '../../assets/img/hero-home.png'
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection
                header="This is a test header"
                text="Nothing to see here"
                page="home"
            />
            <Footer />
        </>
    )
}

export default Home;
