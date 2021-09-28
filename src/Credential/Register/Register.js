import React, {useState} from 'react'
import classes from './Register.module.css';
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
            <h1>Welcome
                <br/>Please Register
            </h1>
            <form onSubmit={submitHandler}>
            <input placeholder="Full Name" type="text" name="Full Name" className={classes.section_input} value={state.fullname} onChange={(event)=>{onChangeHandler(event,"fn")}}/>
            <input placeholder="Email" type="email" name="email" className={classes.section_input} value={state.email} onChange={(event)=>{onChangeHandler(event,"email")}}/>
            <input placeholder="Password" type="password" name="password" className={classes.section_input} value={state.password} onChange={(event)=>{onChangeHandler(event,"pwd")}}/>
            <input placeholder="DD-MM-YYY" type="date" name="date" className={classes.section_input} value={state.dob} onChange={(event)=>{onChangeHandler(event,"dob")}}/>
            <button type ="submit" className={classes.btn}>Register</button>
            </form>
        </div>
        </div>
    )
}

export default Register;