import React from 'react';

import classes from './Layout.module.css';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
};

export default layout;