import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/login" exact><span className="fa fa-sign-in fa-lg">&nbsp;Shop</span></NavigationItem> */}
        <NavigationItem link="/admin" exact><i className="fa fa-user-circle fa-lg">Admin</i></NavigationItem>
    </ul>
);

export default navigationItems;