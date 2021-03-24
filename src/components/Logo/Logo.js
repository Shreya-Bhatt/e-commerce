import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Images/logo.jpg';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <Link to="/">
            <img src={Logo} alt="E-commerce" />
        </Link>
    </div>
);

export default logo;