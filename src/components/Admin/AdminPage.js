import React, { useState} from 'react';
import axios from 'axios';

import classes from './Admin.module.css';
// import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

const AdminPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(1); 

    async function onSubmitHandler (event){
        event.preventDefault();
        const newEntry = {email: email, password: password, role: role};

        if(role === 0) {
            alert("You do not have access to this section!");
        } else if(!email || !password) {
            alert("All fields are mandatory!");
        } else {
            axios.post('http://localhost:8000/api/signin', newEntry).then(res => {
                console.log(res.data)
                localStorage.setItem("user-info", res.data.token);
                localStorage.setItem("user-id", res.data.user._id);
                props.history.push('/addproduct');
            }).catch(err => {
                alert("Enter valid username and password");
            });
        }
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
                <input type="hidden" placeholder="role" value={role} />
                <Button btnType="Success">SUBMIT</Button>
            </form>
        </div>
    );
};

export default AdminPage;