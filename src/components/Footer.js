import React from 'react';
import './Footer.css';
import '../App.css';
import { Link } from 'react-router-dom';
import twLogo from '../assets/img/twitter-logo.png';
import ghLogo from '../assets/img/gh-logo.png';
import liLogo from '../assets/img/li-logo.png';

function Footer() {
    return (
        <div className="wrapper">
            <footer>
                <ul className="footer-links-main">
                    <li>
                        <Link to="/" className="footer-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/cases" className="footer-link">Cases</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="footer-link">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about" className="footer-link">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="footer-link">Contact</Link>
                    </li>
                </ul>
                <ul className="footer-links-cases">
                    <li><p>Latest Cases</p></li>
                    <li>
                        <Link to="/" className="footer-link">Point 1</Link>
                    </li>
                    <li>
                        <Link to="/" className="footer-link">Point 2</Link>
                    </li>
                    <li>
                        <Link to="/" className="footer-link">Point 3</Link>
                    </li>
                    <li>
                        <Link to="/" className="footer-link">Point 4</Link>
                    </li>
                </ul>
                <div className="footer-sm">
                    <a href="https://github.com/ipeglin">
                        <img src={ghLogo} alt="GitHub Profile" />
                    </a>
                    <a href="https://linkedin.com/in/ipeglin">
                        <img src={liLogo} alt="LinkedIn Profile" />
                    </a>
                    <a href="https://twitter.com/PhilipEglin">
                        <img src={twLogo} alt="Twitter Profile" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer
