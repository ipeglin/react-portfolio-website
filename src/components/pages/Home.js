import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Tiles from '../TilesSection';
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection
                header="HOME PAGE"
                text="Nothing to see here"
                page="home"
            />
            <Tiles />
            <Footer />
        </>
    )
}

export default Home;
