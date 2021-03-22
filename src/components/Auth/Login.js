import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Auth.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [userEntry, setUserEntry] = useState({});


    async function onSubmitHandler (event){
        event.preventDefault();
        const newEntry = {email: email, password: password};
        // setUserEntry(...userEntry, newEntry);
        let result = await fetch('http://localhost:8000/api/signin',{
            method: 'POST',
            body: JSON.stringify(newEntry),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    };

    const emailInputEvent = (event) => {
        setEmail(event.target.value);
    };

    const passwordInputEvent = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className={classes.Auth}>
            <form onSubmit={onSubmitHandler}>
                <input type="email" placeholder="Mail address" value={email} onChange={emailInputEvent}/>
                <input type="password" placeholder="Password" value={password} onChange={passwordInputEvent}/>
                <Button btnType="Success">SUBMIT</Button>
                {/* <Button btnType="Success"><Link to="/">SUBMIT</Link></Button> */}
            </form>
            <Button btnType="Danger"><Link to="/signup">SWITCH TO SIGNUP</Link></Button>
        </div>
    );
};

export default Login;