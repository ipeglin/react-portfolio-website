import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

const SIZES = ["large", "medium"];

function CardItem({ text, path, abbreviation, image, size }) {
    const checkCardSize = SIZES.includes(size) ? size : SIZES[0];

    return (
        <Link to={path} className="plain-link">
            <div className={`boxlink ${abbreviation}-img card-item--${checkCardSize}`} style={{ backgroundImage: `url(${image})`}}>
                <p>{text}</p>
            </div>
        </Link>
    )
}

export default CardItem
