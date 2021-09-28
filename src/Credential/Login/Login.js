import React from 'react'
import classes from './Login.module.css';
import { useState } from 'react';
import loginbg from "../../Assets/Images/loginbg.jpg"
import { Button, Form } from 'react-bootstrap';

const Login =(props)=>{
    const [state, setState]= useState({
        userName:"",
        password:""
    })
    let cred ={
        user:"smshu",
        pwd:"lol1850"
    }

    let onchange=(event, type)=>{
        if(type==="usr")
        {
            setState({...state,userName:event.target.value})
        }
        if(type==="pwd")
        {
            setState({...state,password:event.target.value})
        }
    }
    let loginhandler=()=>{
       
            props.history.push({pathname:"/dashboard"})
    }
    
    return(
        <div className={classes.section_login}>
            <div className="row">
            <div className="col-md-6">
            <div className={classes.loginHeader}>Login</div>
            <div></div>
            <Form className={classes.form}>
                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicEmail">
                    <Form.Control type="email" size="lg" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicPassword">
                    <Form.Control type="password" size="lg" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:"left", padding:"1em 0em 0em"}} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="primary" size="lg" style={{margin:"1em 0em 0em"}} onClick={loginhandler}  type="submit">
                    Submit
                </Button>
                <Button variant="light" style={{margin:"1em 0em 0em", display:"block"}}  type="submit">
                    Forgot Password
                </Button>
                </div>
            </Form>
            </div>
            <div className={`col-md-6 ${classes.section2}`}>
                <div className={classes.image}></div>
            </div>
            </div>
      </div>
    )
}

export default Login;