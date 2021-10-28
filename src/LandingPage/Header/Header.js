import React , { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import About from '../../Info/About';
import ScrollDown from '../../UI/ScrollDown/ScrollDown';
import SideDrawer from '../../UI/Sidedrawer/Sidedrawer';
import classes from './Header.module.css';
// import img_bg  from '../Assets/railway_1.jpg'
export const smoothScroll = function(id) {
    var target = document.getElementById(id);
    target.scrollIntoView()
}
const Header=()=>{
    const [state,setState]=useState(
        {
            showDrw:false,
        }
    );
    const showDrawer =()=>{
        setState((prevState)=>
    {
            return({showDrw:!prevState.showDrw})
            
            }
       )

    }
    return(
    <div className={classes.section_header} id="home">
        <h1 className={classes.Logo}>QueryX</h1>
        <div  className={classes.section_text}>
            <button onClick={()=>smoothScroll("about")}>About Us</button>
            {/* eslint-disable-next-line*/}
            <button onClick={()=>smoothScroll("services")}>Services Offered</button>
            <button onClick={()=>smoothScroll("why")}>Why Us</button>
        </div>
        <div  className={classes.section_sign}>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Register" >Register</NavLink>
        </div>
        <div className={classes.nav} onClick={()=>{showDrawer()}}>
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
        </div>
        <div className={classes.text}>
                Consult us <span>regarding</span> <span>
                your issue to get<span> expert advice</span></span>
        </div>
        <ScrollDown/>
        {/* <About show={state.showAbt} display={showAbout}/> */}
        <SideDrawer open={state.showDrw} close={showDrawer} scroll={smoothScroll}/>
    </div>)
        
}

export default Header;

