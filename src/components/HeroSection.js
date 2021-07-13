import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection({header, text, image}) {
    return (
        <div className="hero-container">
            <img src={image} className="hero-image"/>
            <h2>{header}</h2>
            {text && <p>{text}</p>}
        </div>
    )
}

export default HeroSection
