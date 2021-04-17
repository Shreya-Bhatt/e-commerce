import React from 'react';

import "./Cart.css";
import { Link } from "react-router-dom";
import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';

import Aux from '../../hoc/Auxiliary';

const Cart = ({ qtyChangeHandler, removeHandler },{name, photo, price, stock, product}) => {
  let data = localStorage.getItem('cart');
  console.log(data);
  let prod = JSON.parse(data);
  console.log(prod);
  console.log(prod[0].name);
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
        <img src={prod[0].photo} alt={name} />
        {/* Image */}
      </div>
      <Link to={`/product/${prod[0].product}`} className="cartItem__name">
        <p>{prod[0].name}</p>
      </Link>
      <p className="cartitem__price">
        ${prod[0].price}
      </p>
      <select
        value={prod[0].qty}
        onChange={(e) => qtyChangeHandler(prod[0].product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(prod[0].stock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(prod[0].product)}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
    </Aux>
  );
};

export default Cart;