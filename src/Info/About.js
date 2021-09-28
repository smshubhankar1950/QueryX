import React from 'react'
import classes  from "./About.module.css";
import Backdrop from "../UI/Backdrop/Backdrop"

const About = (props)=>{
    let abt = classes.visible;
    if(props.show===true)
    {
        abt=classes.card;
    }
    return(
        <React.Fragment>
            <Backdrop show={props.show} display={props.display}/>
            <div className={abt}>
                <div className={classes.card_header}>About Us</div>
                <div className={classes.card_text}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et sem sit amet nibh condimentum pellentesque. 
                Nullam in justo in dui interdum volutpat eget vel felis. Morbi condimentum ex efficitur erat viverra, non consequat urna dictum.
                Praesent et vestibulum turpis. Suspendisse lectus ligula, auctor ac enim vitae, ultrices congue tortor. Duis a risus quis
                tortor interdum dignissim eu quis tellus. Donec condimentum leo nunc, at venenatis leo tincidunt in. Vestibulum accumsan 
                scelerisque felis, a tristique lectus hendrerit vel. Mauris fringilla metus et pellentesque egestas. Suspendisse sed neque feugiat, 
                dictum dolor ut, interdum orci. Nullam quis nulla justo. Vestibulum malesuada aliquam justo et placerat. Donec pellentesque luctus elit, 
                vel laoreet purus tincidunt at. Ut at tristique nibh, sit amet commodo tellus. Aliquam eu molestie mi, in molestie libero.
                </div>
                <div className={classes.btn} onClick={()=>props.display()}>Close</div>
            </div>

        </React.Fragment>
    )
}

export default About;