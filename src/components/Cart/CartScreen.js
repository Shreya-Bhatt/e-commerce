import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import Aux from '../../hoc/Auxiliary';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';

import CartItem from "../Cart/Cart";

import { addToCart, removeFromCart } from "../../store/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cart);

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const checkoutHandler = () => {
    alert('Your order is successfully placed!');
  };

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
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
 
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/user">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button onClick={checkoutHandler}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default CartScreen;