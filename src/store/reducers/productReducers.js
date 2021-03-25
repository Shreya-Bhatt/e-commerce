import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false
};

export const productReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }

        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
};

export const productDetailsReducer = (state = {product: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {
                loading: true
            }

        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case actionTypes.GET_PRODUCTS_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return {
                product: {}
            }
        default:
            return state;
    }
};