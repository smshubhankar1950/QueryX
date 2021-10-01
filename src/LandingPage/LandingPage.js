import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Header from './Header/Header';
import MidSection from './MidSection/MidSection';
import Services from './Services/Services';

function LandingPage(props) {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <MidSection/>
            <Services/>
            <div style={{height:"50vh",backgroundColor:"rgb(1, 8, 66)"}}></div>
        </div>
    );
}

export default LandingPage;