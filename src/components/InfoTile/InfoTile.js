import React from 'react';
import './InfoTile.css';

function InfoTile({ header, text, image }) {
    return (
        <div className="wrapper">
            <section className="section">
                <div className="infobox">
                    <h2>{header}</h2>
                    {!text.includes("<") && <p>{text}</p>}
                    {text.includes("<") && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
                </div>
                <div className="imagebox">
                    <img src={image} />
                </div>
            </section>
        </div>
    )
}

export default InfoTile
