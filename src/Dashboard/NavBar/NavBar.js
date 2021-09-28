import React from "react";
import classes from "./NavBar.module.css"
import DashIc from "../../Assets/Icons/Dashboard.svg";
import ProfileIc from "../../Assets/Icons/profile.svg";
import IssueIc from "../../Assets/Icons/issue.svg";
import StatusIc from "../../Assets/Icons/status.svg";
import LogoutIc from "../../Assets/Icons/Logout.svg";
import {NavLink, withRouter} from "react-router-dom";
const NavBar = (props)=>{

    console.log(props)
    return(
        <div className={classes.sideNav}>
        <div className={classes.Icon_div}>
        <div className={classes.Icon} >
                    <span></span>
                    <span></span>
                </div>
        </div>
        <div className={classes.nav}>
        <div><NavLink to={{pathname:props.match.url+"/dash"}}><img src={DashIc} alt="dash" className={classes.filter_green}></img></NavLink></div>
        <div><img src={ProfileIc}alt="profile" className={classes.filter_green}></img></div>
        <div><img src={IssueIc} alt="reg" className={classes.filter_green}></img></div>
        <div><img src={StatusIc} alt="status" className={classes.filter_white}></img></div>
        </div>
        <div className={classes.bottom}><img src={LogoutIc} alt="logout" className={classes.filter_green}></img></div>
        </div>
        )
}

export default withRouter(NavBar);