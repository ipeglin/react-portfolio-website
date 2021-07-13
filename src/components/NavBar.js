import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <header>
            <Link to="/" class="navbar-brand">ipeglin</Link>
            <nav>
                <ul>
                    <li><Link to="/portfolio" className="navbar-link">Portfolio</Link></li>
                    <li><Link to="/about" className="navbar-link">About</Link></li>
                    <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                </ul>
                <Link to="/cases" className="navbar-cases">Cases</Link>
            </nav>
        </header>
    );
}

export default NavBar
