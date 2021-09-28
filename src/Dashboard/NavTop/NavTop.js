import React from "react";
import classes from "./NavTop.module.css"
import ProfileIc from "../../Assets/Icons/profilePic.svg";
import bellIc from "../../Assets/Icons/bell.svg";
import settingIc from "../../Assets/Icons/settings.svg";
const NavTop = ()=>{


    return(
    <div className={classes.top_bar}>
        <div><img src={ProfileIc} alt="profilepic" className={classes.filter_green}/></div>
        <div><img src={settingIc} alt="bell" className={classes.filter_green}/></div>
        <div><img src={bellIc} alt="setting" className={classes.filter_green}/></div>
    </div>
  )

}

export default NavTop;