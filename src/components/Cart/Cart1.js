import React from 'react';

import "./Cart.module.css";
import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';
import Searchbar from '../Navigation/Searchbar/Searchbar';
import Aux from '../../hoc/Auxiliary';

const Cart = () => {
  return (
    <Aux>
      <header className={classes.Toolbar}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItemsUser />
                </nav>
            </header>
            <Searchbar />
    <div className="cartitem">
      
    </div>
    </Aux>
  );
};

export default Cart;