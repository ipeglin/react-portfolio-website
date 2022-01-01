import React from 'react';
import '../../App.css';
import personalia from '../../assets/data/personalia';
import InfoTile from '../InfoTile/InfoTile';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import avatar from '../../assets/img/avatar.gif';
import fingerprint from '../../assets/img/fingerprint.gif';
import heart from '../../assets/img/heart.gif';

const images = [avatar, fingerprint, heart];

function About() {
    document.title = "About | ipeglin"
    return (
        <>
            <main>
                <HeroSection
                    header="IAN PHILIP EGLIN"
                    page="about"
                />
                {personalia.map((point, i) => {
                    return (
                        <InfoTile header={point.header} text={point.text} image={images[i]} />
                    );
                })}
            </main>
            <Footer />  
        </>
    )
}

export default About;
