import React from 'react';
import './Footer.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="wrapper">
            <footer>
                <ul className="footer-links-main">
                    <li>
                        <Link to="/" className="footer-links-pages">Home</Link>
                    </li>
                    <li>
                        <Link to="/cases" className="footer-links-pages">Cases</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="footer-links-pages">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about" className="footer-links-pages">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="footer-links-pages">Contact</Link>
                    </li>
                </ul>
                <ul className="footer-links-cases">
                    <li><p>Latest Cases</p></li>
                    <li>
                        <Link to="." className="footer-links-cases">Point 1</Link>
                        <Link to="." className="footer-links-cases">Point 2</Link>
                        <Link to="." className="footer-links-cases">Point 3</Link>
                        <Link to="." className="footer-links-cases">Point 4</Link>
                    </li>
                </ul>
                <div className="footer-sm">
                    <a href="https://github.com/ipeglin">
                        <img src="../assets/img/gh-logo.png" alt="GitHub Profile" />
                    </a>
                    <a href="https://linkedin.com/in/ipeglin">
                        <img src="../assets/img/li-logo.png" alt="LinkedIn Profile" />
                    </a>
                    <a href="https://twitter.com/PhilipEglin">
                        <img src="../assets/img/twitter-logo.png" alt="Twitter Profile" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer
