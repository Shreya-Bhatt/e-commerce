import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Products from '../Products/Products';
import classes from '../../components/Navigation/Toolbar/Toolbar.module.css';
import './Searchbar.css';
import Logo from '../Logo/Logo';
import NavigationItemsUser from '../Navigation/NavigationItems/NavigationItemsUser';

import { getProducts } from '../../store/actions/productActions';

const UserPage = (props) => {
    const dispatch = props.getProducts;

    useEffect (() => {
        dispatch();
    },[dispatch]);

    const [ productSearch, setProductSearch] = useState("");

    const searchInputEvent = (event) => {
        setProductSearch(event.target.value);
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
            <div className="Searchbar">
                <i className="fa fa-search"></i>
                <input type="search" 
                    placeholder="Search by product name" 
                    id="searchBar"
                    onChange={searchInputEvent}
                    value={productSearch}/>
            </div>
            {props.product ? (props.product.filter((product) => {
                if(productSearch === ""){
                    return product
                }else if (product.name.toLowerCase().startsWith(productSearch.toLowerCase())){
                    return product
                }
                }).map(prod => ( <Products 
                key={prod._id}
                name={prod.name}
                price={prod.price}
                description={prod.description}
                photo={prod.photo}
                productId={prod._id}
            />))
            ) : (<h3>No Products Available!</h3>)
        }


            {/* {props.product ? (
                props.product.map(prod => (<Products 
                    key={prod._id}
                    name={prod.name}
                    price={prod.price}
                    description={prod.description}
                    photo={prod.photo}
                    productId={prod._id}
                />))
            ) : (<h3>No Products Available!</h3>)} */}
        </Aux>
    );
};

const mapStateToProps = state => ({
    product: state.product.products
});

// export default UserPage;
export default connect( mapStateToProps, {getProducts})(UserPage);