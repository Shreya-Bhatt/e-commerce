import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Admin.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import { addProduct } from '../../store/actions/productActions';
import axios from 'axios';

const newProduct1 = {
    name: "Learn code onlineee",
    description: "A Tshirt for Codersss",
    price: 25,
    stock: 55
}

const Dashboard = ( props ) => {
    const [productname, setProductName] = useState("");
    const [productprice, setProductPrice] = useState("");
    const [productdes, setProductDes] = useState("");
    const [productstock, setProductStock] = useState("");   

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        const token = localStorage.getItem('user-info');
        const data = new FormData();
        data.append("name", productname);
        data.append("description", productdes);
        data.append("price",productprice);
        data.append("stock", "55");
        if(!productname || !productprice || !productdes || !productstock) {
            alert('All fields are mandatory!');
        } else {
            axios.post(`http://localhost:8000/api/product/create/603dd7a650dbb026bc7e8419`, data,{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' +token ,
                  }
            }).then(res => {
                    console.log(res);
                    alert('Product successfully added!');
            }).catch(err => console.log(err));
        }        
        setProductName("");
        setProductPrice("");
        setProductDes("");
        setProductStock("");
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

    const stockInput = (event) => {
        setProductStock(event.target.value);
    };

    return (
        <div>
            <Toolbar />
            <span className={classes.Sidebar}>
                <Link to="/admin" className={classes.active}>Add Product</Link>
                <Link to="/stock">Stock</Link>
            </span>
            <div className={classes.SidebarItem}>
                <i>Add a new product</i>
                <hr />
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="productname">Product name:&emsp;</label>
                    <input type="text" name="pname" value={productname} onChange={nameInput}/><br/>
                    <label htmlFor="productprice">Product price:&emsp;</label>
                    <input type="number" name="pprice" value={productprice} onChange={priceInput}/><br />
                    <label htmlFor="productdescription">Product description:&emsp;</label>
                    <textarea rows="9" value={productdes} onChange={desInput}></textarea><br />
                    <label htmlFor="productphoto">Product Stock:&emsp;</label>
                    <input type="number" name="stock" value={productstock} onChange={stockInput}/>
                    <button>Add</button>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { addProduct })(Dashboard);