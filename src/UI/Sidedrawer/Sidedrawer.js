import React from 'react'
import classes from './Sidedrawer.module.css'
import { NavLink } from 'react-router-dom';
// import Backdrop from '../Backdrop/Backdrop'

const SideDrawer =(props)=>{
    let classnav=[classes.SideDrawer, classes.Open]
    if(!props.open){
        classnav=[classes.SideDrawer, classes.Close]
    }
    const close = (id)=>{
        props.scroll(id);
        props.close();
    }
     return(
        <React.Fragment>
        <div className={classnav.join(" ")}>
            <div className={classes.Logo}></div>
            <div className={classes.close} onClick={props.close}>
                <div id="icon" className={classes.Icon}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={classes.Logo}>QueryX</div>
            <nav className ={classes.nav}>
                <div onClick={()=>close("about")}>About us</div>
                <div ><button onClick={()=>close("services")}>Services Offered</button></div>
                <div ><NavLink to="/Login">Login</NavLink></div>
                <div ><NavLink to="/Register" >Register</NavLink></div>
            </nav>
            <div className ={classes.nav_d}> Get Started</div>
            {/* <div className={classes.icon}>
                        <div className={classes.arrow}></div>
                    </div> */}
        </div>
        </React.Fragment>
 )
}

export default SideDrawer