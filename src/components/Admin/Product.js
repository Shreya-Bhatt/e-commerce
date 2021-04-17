import React from 'react';
import './Product.css';
import { connect } from 'react-redux';
import { deleteProduct } from '../../store/actions/productActions';
import photo from '../../assets/Images/product.jpg';

const Product = ({productId, name, description, price}, props) => {
    const btnHandler = (event) => {
        event.preventDefault();
        props.deleteProduct(productId)
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

