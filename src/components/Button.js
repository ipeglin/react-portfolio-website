import React from 'react';
import './Button.css';

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