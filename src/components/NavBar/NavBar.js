import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
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
