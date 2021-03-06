import React from 'react';
import './CvSection.css';

/**
 * 
 * @param {object} CvInfo
 * @returns {div} Wrapper with CV-section
 */
function CvSection({ CvInfo }) {
    return (
        <div className="wrapper">
            <section className="cv-section">
                <h2>&#62;Curriculum Vitae</h2>
                {CvInfo.map((point) => {
                    return (
                        <div className="cv-infobox">
                            <h3 className="cv-infobox-title">{point.title} ({point.period})</h3>
                            <p className="cv-infobox-place">{point.place}</p>
                            <p className="cv-infobox-description">{point.description}</p>
                        </div>
                    );
                })}
            </section>
        </div>
    )
}

export default CvSection
