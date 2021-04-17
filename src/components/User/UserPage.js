import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Products from '../Products/Products';
// import Categories from '../../components/Category/Category';
import Searchbar from '../Navigation/Searchbar/Searchbar';
import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';

import { getProducts } from '../../store/actions/productActions';

const UserPage = (props) => {
    const dispatch = props.getProducts;
    useEffect (() => {
        dispatch();
    },[dispatch]);

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
            {/* {props.loading ? ( <h2>Loading...</h2> ) : props.error ? (<h2>Error</h2>) : {product}} */}
            {props.product ? (
                props.product.map(prod => (<Products 
                    key={prod._id}
                    name={prod.name}
                    price={prod.price}
                    description={prod.description}
                    photo={prod.photo}
                    productId={prod._id}
                />))
            ) : (<h3>No Products Available!</h3>)}
        </Aux>
    );
};

const mapStateToProps = state => ({
    product: state.product.products
});

// export default UserPage;
export default connect( mapStateToProps, {getProducts})(UserPage);