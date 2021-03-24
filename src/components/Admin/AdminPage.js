import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import classes from './Admin.module.css';
// import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

const AdminPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onSubmitHandler (event){
        event.preventDefault();
        const newEntry = {email: email, password: password};
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
        <div className={classes.Admin}>
            <form onSubmit={onSubmitHandler}>
                <input type="email" placeholder="Mail address" value={email} onChange={emailInputEvent}/>
                <input type="password" placeholder="Password" value={password} onChange={passwordInputEvent}/>
                <Button btnType="Success"><Link to="/addproduct">SUBMIT</Link></Button>
            </form>
        </div>
    );
};

export default AdminPage;