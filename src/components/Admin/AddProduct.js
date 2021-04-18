import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Admin.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import { addProduct } from '../../store/actions/productActions';
import axios from 'axios';

const Dashboard = ( props ) => {
    const [productname, setProductName] = useState("");
    const [productprice, setProductPrice] = useState("");
    const [productdes, setProductDes] = useState("");
    const [productphoto, setProductPhoto] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const newProduct = {productname: productname, productprice: productprice, productdes: productdes, productphoto: productphoto};
        // setAllProducts(...allProducts, newProduct);
        // let result = await fetch('http://localhost:8000/api/product/create/60782529f12b2c3fe8036755',{
        //     method: 'POST',
        //     body: JSON.stringify(newProduct),
        //     headers: {
        //         "Content-Type": 'application/json',
        //         "Accept": 'application/json'
        //     }
        // });
        // result = await result.json();
        // console.log(result);

        if(!productname || !productprice || !productdes || productphoto) {
            alert('All fields are mandatory!');
        } else {
            axios.post(`http://localhost:8000/api/product/create/60782529f12b2c3fe8036755`, newProduct)
                .then(res => {
                    
                })
        }
        props.addProduct(newProduct);
        setProductName("");
        setProductPrice("");
        setProductDes("");
        setProductPhoto("");
        console.log(newProduct);
    };

    const nameInput = (event) => {
        setProductName(event.target.value);
    };

    const priceInput = (event) => {
        setProductPrice(event.target.value);
    };

    const desInput = (event) => {
        setProductDes(event.target.value);
    };

    const imageInput = (event) => {
        setProductPhoto(event.target.value);
    };

    return (
        <div>
            <Toolbar />
            <span className={classes.Sidebar}>
                <Link to="/admin" className={classes.active}>Add Product</Link>
                <Link to="/stock">Stock</Link>
                <Link to="/orders">Orders</Link>
            </span>
            <div className={classes.SidebarItem}>
                <i>Add a new product</i>
                <hr />
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="productname">Product name:&emsp;</label>
                    <input type="text" name="pname" value={productname} onChange={nameInput}/><br/>
                    <label htmlFor="productprice">Product price:&emsp;</label>
                    <input type="text" name="pprice" value={productprice} onChange={priceInput}/><br />
                    <label htmlFor="productdescription">Product description:&emsp;</label>
                    <textarea rows="9" value={productdes} onChange={desInput}></textarea><br />
                    <label htmlFor="productphoto">Product Image:&emsp;</label>
                    <input type="file" name="pimage" value={productphoto} onChange={imageInput}/>
                    <button>Add</button>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { addProduct })(Dashboard);