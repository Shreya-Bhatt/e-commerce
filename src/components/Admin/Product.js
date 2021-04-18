import React from 'react';
import { useDispatch } from 'react-redux';

import './Product.css';
import { connect } from 'react-redux';
import { deleteProduct } from '../../store/actions/productActions';
import photo from '../../assets/Images/product.jpg';

const Product = ({productId, name, description, price}, props) => {
    const dispatch = useDispatch();

    const btnHandler = () => {
        dispatch(deleteProduct(productId));
        window.location.reload();
    };

    return (
        <div className="Item-card">
            <img src={photo} className="Item-image" alt={name} />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
            <button onClick={btnHandler}>Delete</button>
        </div>
    );

  }

export default connect(null, { deleteProduct })(Product);

