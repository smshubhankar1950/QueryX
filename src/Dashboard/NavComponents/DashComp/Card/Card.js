import React from "react";
import classes from "./Card.module.css"
const Card = (props)=>{
     let color=classes.circle;
    switch (props.type){
        case "pending": color=classes.circle+" "+classes.red;
        break;
        case "resolved": color=classes.circle+" "+classes.green;
        break;
        default: color=classes.circle
    }

    return(
        <div className={classes.card}>
            <div className={color}>
                <div>{props.cardType}
                </div>
            </div>
            <div className={classes.details}>{props.num}<span>Total</span></div>
        </div>
        )

}

export default Card;