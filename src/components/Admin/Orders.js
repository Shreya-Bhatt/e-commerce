import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Admin.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const orders = ( props ) => {
    return (
        <div>
            <Toolbar />
            <span className={classes.Sidebar}>
                <Link to="/admin">Add Product</Link>
                <Link to="/stock">Stock</Link>
                <Link to="/orders" className={classes.active}>Orders</Link>
            </span>
            <div className={classes.SidebarItem}>
                <i>Orders</i>
                <hr />
            </div>
        </div>
    );
};

export default orders;