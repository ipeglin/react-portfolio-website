import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

const SIZES = ["large", "medium"];

/**
 * Function component for links with background image.
 * @param {string} text - Main text in the card.
 * @param {string} path - Path leading to a website. 
 * @param {string} image - Image path.
 * @param {string} size - Image size class. <medium | large>.
 * @returns {Link} Link to a page on the website.
 */
function CardItem({ text, path, image, size }) {
    const checkCardSize = SIZES.includes(size) ? size : SIZES[0];

    return (
        <Link to={path} className="plain-link">
            <div className={`boxlink card-item--${checkCardSize}`} style={{ backgroundImage: `url(${image})` }}>
                <div className="vertical-spacer">
                    <div>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardItem
