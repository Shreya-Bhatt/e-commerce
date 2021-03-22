// import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

export const addProduct = () => {
    return {type: actionTypes.ADD_PRODUCT};
};

export const fetchProduct = () => {
    return {type: actionTypes.FETCH_PRODUCT};
};

export const deleteProduct = () => {
    return {type: actionTypes.DELETE_PRODUCT};
};