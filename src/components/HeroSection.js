import React from 'react';
import '../App.css';
import './HeroSection.css';
import './HeroSectionCases.css';


function HeroSection({ header, text, page }) {
    return (
        <section className={`hero-container hero-${page}`} >
            <div className="vertical-center">
                <h2 dangerouslySetInnerHTML={{ __html: header }}></h2>
                {text && <h1 dangerouslySetInnerHTML={{ __html: text }}></h1>}
            </div>
        </section>
    )
}

export default HeroSection
