import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem({ text, path, abbreviation, image }) {
    return (
        <Link to={path} className="plain-link">
            <div className={`boxlink ${abbreviation}-img`} style={{ backgroundImage: `url(${image})`}}>
                <p>{text}</p>
            </div>
        </Link>
    )
}

export default CardItem
