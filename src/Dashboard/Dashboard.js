import React from "react";
// import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import NavTop from "./NavTop/NavTop";
import classes from "./Dashboard.module.css"
import { Redirect,Route,Switch } from "react-router-dom";
import DashComp from "./NavComponents/DashComp/DashComp";
const DashBoard = ()=>{


    return(
    <div className={classes.background}>
        <NavBar/>
        <NavTop/>
        <Switch>
        <Route path="/dashboard/dash" exact component={DashComp}></Route>
        <Redirect from="/dashboard" to="/dashboard/dash"/>
        </Switch>
    </div>)

}

export default DashBoard;