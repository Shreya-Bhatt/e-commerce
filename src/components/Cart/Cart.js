import React from 'react';

import "./Cart.module.css";
import { Link } from "react-router-dom";
import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';

import Aux from '../../hoc/Auxiliary';

const Cart = ({ item, qtyChangeHandler, removeHandler }) => {
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
      <div className="cartitem">
      <div className="cartitem__image">
        {/* <img src={item.photo} alt={item.name} /> */}
        Image
      </div>
      {/* <Link to={`/product/${item.product}`} className="cartItem__name"> */}
      <Link to={`/product`} className="cartItem__name">
        {/* <p>{item.name}</p> */}
        Name
      </Link>
      <p className="cartitem__price">
        {/* ${item.price} */}
        Price
      </p>
      <select
        // value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {/* {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))} */}
      </select>
      <button
        className="cartItem__deleteBtn"
        // onClick={() => removeHandler(item.product)}
        onClick={() => removeHandler()}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
    </Aux>
  );
};

export default Cart;