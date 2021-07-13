import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection({header, text, page}) {
    return (
        <section className={`hero-container hero-${page}`} >
            <div className="vertical-center">
                <h2>{header}</h2>
                {text && <p>{text}</p>}
            </div>
        </section>
    )
}

export default HeroSection
