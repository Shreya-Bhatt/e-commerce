import React from 'react';
import { useDispatch } from 'react-redux';

import './Product.css';
import { connect } from 'react-redux';
import { deleteProduct } from '../../store/actions/productActions';
import photo from '../../assets/Images/product.jpg';

const Product = ({productId, name, description, price, stock}) => {
    const dispatch = useDispatch();

    const delBtnHandler = () => {
        dispatch(deleteProduct(productId));
        window.location.reload();
    };

    return (
        <div className="Item-card">
            <img src={photo} className="Item-image" alt={name} />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p>{description}</p>
            <p>Stock: <b>{stock}</b></p>
            <button onClick={delBtnHandler}>Delete</button>
        </div>
    );

  }

export default connect(null, { deleteProduct })(Product);

