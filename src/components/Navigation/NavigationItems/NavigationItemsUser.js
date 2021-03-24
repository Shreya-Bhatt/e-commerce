import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/cart" exact><span className="fa fa-cart-plus fa-lg">&nbsp;Cart</span></NavigationItem>
        <NavigationItem link="/" exact><span className="fa fa-sign-in fa-lg">&nbsp;Logout</span></NavigationItem>
    </ul>
);

export default navigationItems;