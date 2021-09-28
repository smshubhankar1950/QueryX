import React from "react";
import { withRouter } from "react-router-dom";
import Card from "./Card/Card";
import classes from "./DashComp.module.css"
const DashComp = ()=>{
    let today = new Date().toISOString().slice(0, 10)
    return(
        <div className={classes.Conatiner}>
            <div className={classes.Heading}>DashBoard</div>
            <Card cardType="Issue Raised" num="10" type="raised"/>
            <Card cardType="Issue Resolved" num="6" type="resolved"/>
            
            <div className={classes.footer}>Data till {today}</div>
        </div>
    )

}

export default withRouter(DashComp);