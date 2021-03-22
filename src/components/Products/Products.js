import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Products.module.css';
import ProductImage from '../../assets/Images/product.jpg';

import Aux from '../../hoc/Auxiliary';

const products = ( props ) => {
    return (
        <Aux className={classes.Products}>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name<br/>Price</center></b>
                <p>Product description</p>
                <NavLink to="/login">
                    <button>Add to Cart</button>
                </NavLink>
            </div>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name <br/>Price</center></b>
                <p>Product description</p>
                <button>Add to Cart</button>
            </div>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name <br/>Price</center></b>
                <p>Product description</p>
                <button>Add to Cart</button>
            </div>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name <br/>Price</center></b>
                <p>Product description</p>
                <button>Add to Cart</button>
            </div>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name <br/>Price</center></b>
                <p>Product description</p>
                <button>Add to Cart</button>
            </div>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name <br/>Price</center></b>
                <p>Product description</p>
                <button>Add to Cart</button>
            </div>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name <br/>Price</center></b>
                <p>Product description</p>
                <button>Add to Cart</button>
            </div>
            <div className={classes.Product}>
                <img src={ProductImage} alt="product"/>
                <b><center>Product name <br/>Price</center></b>
                <p>Product description</p>
                <button>Add to Cart</button>
            </div>
        </Aux>
    );
};

export default products;