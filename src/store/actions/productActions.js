import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const getProducts = () => async dispatch => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});

        const { data } = await axios.get("http://localhost:8000/api/products");
        console.log(data);

        dispatch ({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch ({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: 'Something went wrong while fetching the products!'
        })
    }
};

export const getProductDetails = (id) => async dispatch => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST});

        // const { data } = await axios.get(`http://localhost:8000/api/product/603f2b35c55644379f19ede1`);
        const { data } = await axios.get(`http://localhost:8000/api/product/${id}`);
        // console.log(data);

        dispatch ({
            type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: actionTypes.GET_PRODUCTS_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
};

export const removeProductsDetails = () => dispatch => {
    dispatch({
        type: actionTypes.GET_PRODUCTS_DETAILS_RESET
    });
};

export const addProduct = (prodData) => async dispatch => {
    console.log(prodData);
    try {
        const token = localStorage.getItem('user-info');
    
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }

        const { data } = await axios.post(`http://localhost:8000/api/product/create/60782529f12b2c3fe8036755`, prodData, config);
        console.log(data);
        dispatch ({
            type: actionTypes.ADD_PRODUCT,
            payload: data
        })

    } catch (error) {
        dispatch ({
            type: actionTypes.ADD_PRODUCT_FAIL,
            payload: 'Something went wrong while adding the product!'
        })
    }
};

export const deleteProduct = (id) => async dispatch => {
    try {
        const token = localStorage.getItem('user-info');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        await axios.delete(`http://localhost:8000/api/product/${id}/60782529f12b2c3fe8036755`, config)
    
        dispatch({
            type: actionTypes.DELETE_PRODUCT,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: actionTypes.DELETE_PRODUCT_FAIL,
            payload: 'Something went wrong while deleting the product!'
        });
    }
};