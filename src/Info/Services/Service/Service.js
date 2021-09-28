import React from 'react'
import classes from './Service.module.css'

const Service=(props)=>{
    let color;
    if(props.obj.id===2){
        color="#3F9E2E";
    }
    if(props.obj.id===3){
        color="#7737FF";
    }

    return(
        <div className={classes.container}>
            <div className={classes.service}>{props.obj.name}
                <div style={{color:color}}>{props.obj.price}</div>
            </div>
            <p className={classes.subService}>
                <span>&#10003;</span>
                {props.obj.inc1}
            </p>
            <p className={classes.subService}>
                <span>&#10003;</span>
                {props.obj.inc2}
            </p>
            <p className={classes.subService}>
                <span>&#10003;</span>
                {props.obj.inc3}
            </p>
            <button style={{backgroundColor:color}} className={classes.btn}> Book now</button>
        </div>
    )
}
export default Service;