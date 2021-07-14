import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import CasesInfo from '../../assets/CasesInfo';
import { useHistory } from 'react-router';


function CasePage() {
    const history = useHistory();
    const [page, setPage] = useState(history.location.pathname.split('/').pop());
    useEffect(() => {
        setPage(history.location.pathname.split('/').pop());
    }, [history.location.pathname]);
    
    const [info, setInfo] = useState(_.findWhere(CasesInfo, { snowflake: page }));
    useEffect(() => {
        setInfo(_.findWhere(CasesInfo, { snowflake: page }));
    }, [page]);

    return (
        <>
            <main>
                <HeroSection
                    header={info.name}
                    text={info.titleDescription}
                    page={info.snowflake}
                />
            </main>
            <Footer />
        </>
    )
}

export default CasePage
