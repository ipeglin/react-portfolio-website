import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Tiles from '../TilesSection/TilesSection';
import Footer from '../Footer/Footer';


function Home() {
    document.title = "Home | ipeglin"
    return (
        <>
            <main>
                <HeroSection
                    header="<h2>I'M STUDYING ELECTRONICS<br>SYSTEMS DESIGN AT NTNU</h2>"
                    text="I also have a passion for expressing my creative side.
                    Among other things I enjoy development, photography and exercising"
                    page="home"
                />
                <Tiles />
            </main>
            <Footer />
        </>
    )
}

export default Home;
