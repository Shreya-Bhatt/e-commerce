import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Admin.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const stock = ( props ) => {
    return (
        <div>
            <Toolbar />
            <span className={classes.Sidebar}>
                <Link to="/admin">Add Product</Link>
                <Link to="/stock" className={classes.active}>Stock</Link>
                <Link to="/orders">Orders</Link>
            </span>
            <div className={classes.SidebarItem}>
                <i>Stock</i>
                <hr />
            </div>
        </div>
    );
};

export default stock;