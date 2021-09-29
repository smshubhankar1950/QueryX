import React , { useState } from 'react'
import { NavLink } from 'react-router-dom';
import About from '../../Info/About';
import SideDrawer from '../../UI/Sidedrawer/Sidedrawer';
import classes from './Header.module.css';
// import img_bg  from '../Assets/railway_1.jpg'

const Header=()=>{
    const [state,setState]=useState(
        {
            showAbt:false,
            showSrv:false,
            showDrw:false,
        }
    );
    const showAbout =()=>{
        setState((prevState)=>
        {
            return({showAbt:!prevState.showAbt})
            
            }
       )

    }
    const showDrawer =()=>{
        setState((prevState)=>
    {
            return({showDrw:!prevState.showDrw})
            
            }
       )

    }
    return(
    <div className={classes.section_header}>
        <h1 className={classes.Logo}>QueryX</h1>
        <div  className={classes.section_text}>
            <button onClick={()=>showAbout()}>About Us</button>
            {/* eslint-disable-next-line*/}
            <a href="#" >Services Offered</a>
            <NavLink to="/faq">FAQ</NavLink>
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
        <About show={state.showAbt} display={showAbout}/>
        <SideDrawer open={state.showDrw} close={showDrawer} About={showAbout} openSer={state.openSer}/>
    </div>)
        
}

export default Header;
