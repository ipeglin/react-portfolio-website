import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import Button from '../Button/Button';
import CasesInfo from '../../assets/CasesInfo';
import { useHistory } from 'react-router';
import ArticleSection from '../ArticleSection/ArticleSection';


function CasePage() {
    const history = useHistory();
    useEffect(() => {
        setPage(history.location.pathname.split('/').pop());
    }, [history.location.pathname]);
    
    const [page, setPage] = useState(history.location.pathname.split('/').pop());
    useEffect(() => {
        setInfo(_.findWhere(CasesInfo, { snowflake: page }));
    }, [page]);
    
    const [info, setInfo] = useState(_.findWhere(CasesInfo, { snowflake: page }));
    useEffect(() => {
        document.title = `${info.name} | ipeglin`
    }, [info]);

    return (
        <>
            <main>
                <HeroSection
                    header={info.name}
                    text={info.titleDescription}
                    page={`case-${info.abbreviation}`}
                />
                <ArticleSection header={info.articleHeader} text={info.description} />
                {info.sourceLink && <Button path={info.sourceLink} buttonText="View Source" />}
            </main>
            <Footer />
        </>
    )
}

export default CasePage
