import React from 'react'
import classes from './Service.module.css'

const Service=(props)=>{
    let color="#7737FF";
    return(
        <div className={classes.container}>
            <div className={classes.service}>{props.obj.name}
                <div style={{color:color}}>{props.obj.price}</div>
            </div>
            <p className={classes.subService}>
                {props.obj.inc1}
            </p>
            <p className={classes.subService}>
                {props.obj.inc2}
            </p>
            <p className={classes.subService}>
                {props.obj.inc3}
            </p>
            <p className={classes.subService}>
                {props.obj.inc4}
            </p>
            <p className={classes.subService}>
                {props.obj.inc5}
            </p>
            <button className={classes.btn}> Book now</button>
        </div>
    )
}
export default Service;