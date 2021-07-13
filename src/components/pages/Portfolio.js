import React from 'react';
import CvInfo from '../../assets/CvInfo';
import CvSection from '../CvSection';
import Footer from '../Footer';
import ProjectSection from '../ProjectSection';

function Portfolio() {
    return (
      <>
        <main>
          <CvSection CvInfo={CvInfo.highlights} />
          <ProjectSection />
        </main>
        <Footer />  
      </>
    )
}

export default Portfolio
