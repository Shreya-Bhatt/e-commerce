import "./Product.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";

import Aux from '../../hoc/Auxiliary';
import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';
import { getProductDetails } from "../../store/actions/productActions";
import { addToCart } from "../../store/actions/cartActions";

const Product = ({ match, history }, {name, price, description, photo, productId, stock}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  // console.log(productDetails);
  // console.log(product);
  // console.log(loading);

  useEffect(() => {
    if (product) {
      dispatch(getProductDetails(productId));
    }
  }, [dispatch, match, productId, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(productId, qty));
    history.push(`/cart`);
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
      <div className="productscreen">
      {/* {loading ? (
        <h2>Loading...</h2> */}
      {error ? (
        <h2>{error}</h2>
      ) : (product ?
        <Aux>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={photo} alt={name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </Aux>
       : <h2>Product not available!</h2>)}
    </div>
    </Aux>
  );
};

export default Product;
