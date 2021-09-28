import React, {useState} from 'react'
import classes from './Register.module.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'
const Register =()=>{
    const [state, setState]=useState({
        fullname:"",
        email:"",
        password:"",
        dob:"",
    });
    const onChangeHandler=(event, id)=>{
        switch (id){
            case "fn":
                setState({
                    ...state,
                    fullname:event.target.value
                    
                })
                break;
            case "email":
                setState({
                    ...state,
                    email:event.target.value
                })
                break;
            case "pwd":
                setState({
                    ...state,
                    password:event.target.value
                })
                break;
            case "dob":
                setState({
                    ...state,
                    dob:event.target.value
                })
                break;
            default:setState({...state})

        }

    }
    const user={
        ...state
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:5000/users",{...user}).then(res=>{
            console.log(res);
        })

    }
    return(
        <div className={classes.section_back}>
        <div className={classes.section_login}>
        <div className={classes.form}>
        <div className={classes.signUp}>Sign Up</div>
        <div className={classes.subHeading}>Give us some of your information to create a free account</div>
        <Form>
                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicPassword">
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group className="mb-3" style={{padding:"1em 0em 0em"}} controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Choose a password" />
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:"left", padding:"1em 0em 0em"}} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="By clicking here you agree to the terms and condition of this website" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="primary" size="lg" style={{margin:"1em 0em 0em"}}  type="submit">
                   Register
                </Button>
                </div>
            </Form>
        </div>
        </div>
        </div>
    )
}

export default Register;