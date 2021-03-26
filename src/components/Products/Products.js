import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Products.module.css';
// import ProductImage from '../../assets/Images/product.jpg';

import Aux from '../../hoc/Auxiliary';

const products = ( photo, name, price, description, productId ) => {
    return (
        <Aux className={classes.Products}>
            <div className={classes.Product}>
                <img src={photo} alt={name}/>
                <b><center>{name}<br/>${price}</center></b>
                <p>{description.substring(0,100)}...</p>
                <Link to={`/product/${productId}`}>View</Link>
            </div>
        </Aux>
    );                                   
};

export default products;

