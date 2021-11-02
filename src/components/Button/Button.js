import React from 'react';
import './Button.css';

/**
 * Function component for button.
 * @param {string} path - String with the path the button will link to.
 * @param {string} buttonText - Button text.
 * @returns {div} Button withing a 'wrapper' div.
 */
const Button = ({ path, buttonText }) => {
    return (
        <div className="wrapper">
            <a href={path}>
                <div className="btn">
                    <p>{buttonText}</p>
                </div>
            </a>
        </div>
    );
};

export default Button;