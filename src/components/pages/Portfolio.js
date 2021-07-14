import React from 'react';
import CvInfo from '../../assets/CvInfo';
import CvSection from '../CvSection/CvSection';
import Footer from '../Footer/Footer';
import ProjectSection from '../ProjectSection/ProjectSection';

function Portfolio() {
  document.title = "ipeglin | Portfolio"
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
