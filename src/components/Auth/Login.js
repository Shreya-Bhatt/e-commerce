import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Auth.module.css';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/Auxiliary';
import axios from 'axios';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onSubmitHandler (event){
        event.preventDefault();
        const newEntry = {email: email, password: password};

        axios.post('http://localhost:8000/api/signin', newEntry).then(res => {
            localStorage.setItem("user-info", JSON.stringify(newEntry));
            props.history.push('/user');
        }).catch(err => {
          alert("Enter valid username and password")
        })
    
    };

    const emailInputEvent = (event) => {
        setEmail(event.target.value);
    };

    const passwordInputEvent = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Aux>
            <center><h1>Welcome to Shopping+</h1>
            <h4>For shopping, please register yourself or login if you have an existing account.</h4>
            <h2>Enjoy shopping :)</h2></center>
            <div className={classes.Auth}>
            <form onSubmit={onSubmitHandler}>
                <input type="email" placeholder="Mail address" value={email} onChange={emailInputEvent}/>
                <input type="password" placeholder="Password" value={password} onChange={passwordInputEvent}/>
                <Button btnType="Success" onClick={onSubmitHandler}>SUBMIT</Button>
            </form>
            <Button btnType="Danger"><Link to="/">SWITCH TO SIGNUP</Link></Button>
            </div>
        </Aux>
    );
};


export default Login;