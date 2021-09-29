import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Credential/Login/Login";
import Register from "../Credential/Register/Register";
import DashBoard from "../Dashboard/Dashboard";
// import DashComp from "../Dashboard/NavComponents/DashComp/DashComp";
// import NavBar from "../Dashboard/NavBar/NavBar";
// import Header from '../LandingPage/Header/Header';
import LandingPage from "../LandingPage/LandingPage";
const Main=()=>{
    return(
        <div>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/dashboard"  component={DashBoard}/>
                <Route path="/Login" exact component={Login}></Route>
                <Route path="/Register" exact component={Register}></Route>
                
            </Switch>
        </div>
    )

    // respresentation against chargesheet
    // Explaination to intrincasy of rules
    // acting as defense assistance within eastern railway
}
export default Main;