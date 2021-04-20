import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Products.module.css';
import ProductImage from '../../assets/Images/product.jpg';

import Aux from '../../hoc/Auxiliary';

const Products = ({name, price, description, photo, productId}) => {
    console.log(photo);
    return (
        <Aux className={classes.Products}>
            <div className={classes.Product}>
                {/* <img src={photo} alt={name}/> */}
                {/* <img src={ProductImage} alt={name}/> */}
                <img src="http://localhost:8000/api/product/photo/603f2b88c55644379f19ede2" alt={name}/>
                <p style={{fontSize: "15px"}}><b>{name}<br/>${price}</b></p>
                <p>{description}</p>
                <Link to={`/product/${productId}`}>View</Link>
            </div>
        </Aux>
    );                                   
};

export default Products;

