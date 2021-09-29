import React from 'react';
import Header from './Header/Header';
import MidSection from './MidSection/MidSection';
import Services from './Services/Services';

function LandingPage(props) {
    return (
        <div>
            <Header/>
            <MidSection/>
            <Services/>
        </div>
    );
}

export default LandingPage;