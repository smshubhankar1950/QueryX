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
        if(state.userName===cred.user && state.password===cred.pwd)
        {
            props.history.push({pathname:"/dashboard"})
        }
    }
    
    return(
        <div className={classes.section_login}>
            <div className="row">
            <div className="col-md-6">
            <div className={classes.loginHeader}>Login</div>
            <div></div>
            <Form className={classes.form}>
                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:"left"}}controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="light" type="submit">
                    Forgot Password
                </Button>
            </Form>
            </div>
            <div className="col-md-6">
                <div className={classes.image}></div>
            </div>
            </div>
      </div>
    )
}

export default Login;