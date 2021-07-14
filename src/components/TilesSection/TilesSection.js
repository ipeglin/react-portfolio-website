import React from 'react';
import './TilesSection.css';
import '../../App.css';
import { Link } from 'react-router-dom';

function TilesSection() {
    return (
        <div className="wrapper">
            <section className="tile-links">
                <Link to="/cases" className="tile-links-link">
                    <div className="tile--square">
                        <h3>Cases</h3>
                    </div>
                </Link>
                <Link to="/portfolio" className="tile-links-link">
                    <div className="tile--rectangle">
                        <h3>Portfolio</h3>
                    </div>
                </Link>
                <a href="https://www.linkedin.com/in/ipeglin/" className="tile-links-link">
                    <div className="tile--square">
                        <h3>LinkedIn</h3>
                    </div>
                </a>
                <a href="https://github.com/ipeglin" className="tile-links-link">
                    <div className="tile--rectangle">
                        <h3>Cases</h3>
                    </div>
                </a>
                <Link to="/about" className="tile-links-link">
                    <div className="tile--square">
                        <h3>About</h3>
                    </div>
                </Link>
                <Link to="/contact" className="tile-links-link">
                    <div className="tile--square">
                        <h3>Contact</h3>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default TilesSection
