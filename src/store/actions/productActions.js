import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const getProducts = async (dispatch) => {
    try {
        const { data }   = await axios.get("http://localhost:8000/api/products");
        console.log(data);
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST, payload: data});

        dispatch ({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
};

export const getProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST});

        const { data } = await axios.get(`/product/:productId/${id}`);

        dispatch ({
            type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch ({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
};

export const removeProductsDetails = () => dispatch => {
    dispatch({
        type: actionTypes.GET_PRODUCTS_DETAILS_RESET
    });
};