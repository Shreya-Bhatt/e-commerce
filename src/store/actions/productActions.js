import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const getProducts = (id) => async dispatch => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});

        const { data } = await axios.get("http://localhost:8000/api/products");
        // const photo = await axios.get(`http://localhost:8000/api//product/photo/${id}`);
        console.log(data);

        dispatch ({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
            // payload:[...data,photo]
        })
    } catch (error) {
        dispatch ({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: 'Something went wrong while fetching the products!'
        })
    }
};

export const getProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST});

        const { data } = await axios.get(`http://localhost:8000/api/product/:productId/${id}`);
        // const photo = await axios.get(`http://localhost:8000/api//product/photo/${id}`);
        console.log(data);

        dispatch ({
            type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: 'Something went wrong while fetching product details!'
        })
    }
};

export const removeProductsDetails = () => dispatch => {
    dispatch({
        type: actionTypes.GET_PRODUCTS_DETAILS_RESET
    });
};