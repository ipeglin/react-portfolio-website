import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection
                header="HOME PAGE"
                text="Nothing to see here"
                page="home"
            />
            <Footer />
        </>
    )
}

export default Home;
