import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection({header, text, page}) {
    return (
        <div className={`hero-container hero-${page}`} >
            <h2>{header}</h2>
            {text && <p>{text}</p>}
        </div>
    )
}

export default HeroSection
