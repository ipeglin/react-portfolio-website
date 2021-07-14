import React from 'react';
import './ArticleSection.css';

function ArticleSection({ header, text }) {
    return (
        <div className="wrapper">
            <section className="article-section">
                <h2>{header}</h2>
                <div className="article-textbox">
                    {text.map((paragraph) => {
                        if (!paragraph.includes("<")) {
                            return (
                                <div className="article-paragraph">
                                    <p>{paragraph}</p>
                                </div>
                            );
                        } else {
                            return (
                                <div className="article-paragraph">
                                    <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                </div>
                            );
                        }
                    })}
                </div>
            </section>
        </div>
    )
}

export default ArticleSection
