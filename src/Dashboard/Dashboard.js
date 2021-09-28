import React from "react";
// import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import NavTop from "./NavTop/NavTop";
import classes from "./Dashboard.module.css"

const DashBoard = ()=>{


    return(
    <div className={classes.background}>
        <NavBar/>
        <NavTop/>
    </div>)

}

export default DashBoard;