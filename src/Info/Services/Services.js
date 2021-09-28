import React from 'react'
import classes from './Services.module.css'
import Service from './Service/Service'
import Backdrop from '../../UI/Backdrop/Backdrop'
const service_of=[
    {
        id:1,
        price:"10$",
        name:"Service1",
        inc1:"Include1",
        inc2:"Include2",
        inc3:"Include3"
    },
    {
        id:2,
        price:"50$",
        name:"Service2",
        inc1:"Include1",
        inc2:"Include2",
        inc3:"Include3"
    },
    {
        id:3,
        price:"90$",
        name:"Service3",
        inc1:"Include1",
        inc2:"Include2",
        inc3:"Include3"
    }
]
const Services=(props)=>{
    let style = classes.display;
    if(props.show===true){
        style=classes.cont
    }
    let comp = service_of.map(
        (obj)=><Service key={obj.id} obj={obj} />)
    return(
    <React.Fragment>
    <Backdrop show={props.show} display={props.display}/>
    <div className={style}>
    <div className={classes.close} onClick={props.display}>
                <div id="icon" className={classes.Icon}>
                    <span></span>
                    <span></span>
                </div>
        </div>
        <p className={classes.heading}>Here's what we have to offer</p>
        <p className={classes.heading2}>Choose the plan that best fits your current requirement</p>
        {comp}
    </div>
    </React.Fragment>)
}
export default Services;