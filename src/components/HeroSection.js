import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection({header, text, page}) {
    return (
        <section className={`hero-container hero-${page}`} >
            <div className="vertical-center">
                <h2>{header}</h2>
                {text && <h1>{text}</h1>}
            </div>
        </section>
    )
}

export default HeroSection
