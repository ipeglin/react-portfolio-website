import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import '../../assets/img/hero-home.png'


function Home() {
    return (
        <>
            <HeroSection
                header="This is a test header"
                text="Nothing to see here"
                page="home" />
        </>
    )
}

export default Home;
