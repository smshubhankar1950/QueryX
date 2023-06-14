import React from 'react'
import classes from './Services.module.css'
import Service from './Service/Service'
const service_of=[
    {
        id:1,
        price:"100$",
        name:"Prime",
        inc1:"Personal assistant",
        inc2:"IT support",
        inc3:"Tax accountant",
        inc4:"Software Developer",
        inc5:"Mechanic",
    },
    {
        id:2,
        price:"500$",
        name:"Prime Plus+",
        inc1:"Personal assistant+",
        inc2:"IT support+",
        inc3:"Tax accountant+",
        inc4:"Software Developer+",
        inc5:"Mechanic+",
    },
    {
        id:3,
        price:"900$",
        name:"Prime Ultra Max",
        inc1:"Everything in above tiers",
        inc2:"Personal asssasin",
        inc3:"Chartered accountant+",
        inc4:"Web Developer Developer+",
        inc5:"Civil Engineer",
        inc6:"Personal Lawer"
    }
]
const Services=(props)=>{
    let comp = service_of.map(
        (obj, index)=>
        <div className="col-lg" key={index}>
            <Service obj={obj} />
        </div>)
    return(
    <div className={classes.display} id="services">
        <div className="container">
            <div className="row" style={{flexDirection: "column"}}> 
                <div className={classes.heading}>Here's what we have to offer</div>
                <div className={classes.heading2}>Choose the plan that best fits your current requirement</div>
            </div>
            <div className="row">{comp}</div>
            </div>
    </div>)
}
export default Services;