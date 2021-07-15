import React from 'react';
import '../../App.css';
import CasesSection from '../CasesSection/CasesSection';
import Footer from '../Footer/Footer';


function Cases() {
    document.title = "Cases | ipeglin"
    return (
        <>
           <main>
               <CasesSection />
            </main>
            <Footer />  
        </>
    )
}

export default Cases
