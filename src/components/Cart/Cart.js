import React from 'react';

import "./Cart.css";
import { Link } from "react-router-dom";
import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';

import Aux from '../../hoc/Auxiliary';

const Cart = ({ qtyChangeHandler, removeHandler, item }) => {
  console.log(item);
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
        <img src="http://localhost:8000/api/product/photo/603f2b88c55644379f19ede2" 
          alt={item.name} 
          style={{width: "200px", height: "150px"}}/>
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">
        ${item.price}
      </p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.stock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
    </Aux>
  );
};

export default Cart;