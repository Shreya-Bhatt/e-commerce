import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Admin.module.css';
import './Product.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import { getProducts } from '../../store/actions/productActions';
import Product from './Product';

const Stock = ( props ) => {
    const dispatch = props.getProducts;
    useEffect(() => {
        dispatch();
    },[dispatch]);

    return (
        <div>
            <Toolbar />
            <span className={classes.Sidebar}>
                <Link to="/admin">Add Product</Link>
                <Link to="/stock" className={classes.active}>Stock</Link>
                <Link to="/orders">Orders</Link>
            </span>
            <div className={classes.SidebarItem}>
                <i>Stock</i>
                <hr />
                <div className="Main">
                {props.product ? (
                    props.product.map(prod => ( <Product 
                        key={prod._id} 
                        name={prod.name}
                        price={prod.price}
                        description={prod.description}
                        photo={prod.photo}
                        productId={prod._id}/> ))
                    ) : (<h2> No products available!</h2>)}
            </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    product: state.product.products
});

export default connect(mapStateToProps, { getProducts })(Stock);